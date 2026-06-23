import { translations, GERMAN_COUNTRIES, SPANISH_COUNTRIES, SUPPORTED_LANGS } from '../i18n/translations.js';

const STORAGE_KEY = 'gb_lang';
const MANUAL_KEY = 'gb_lang_manual'; // set only when user explicitly picks a language

// ─── Language resolution ──────────────────────────────────────────────────────

function getLangFromBrowser() {
  const tag = (navigator.language || navigator.languages?.[0] || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(tag) ? tag : 'en';
}

function getLangFromCountry(countryCode) {
  if (!countryCode) return null;
  const cc = countryCode.toUpperCase();
  if (GERMAN_COUNTRIES.has(cc)) return 'de';
  if (SPANISH_COUNTRIES.has(cc)) return 'es';
  return 'en';
}

async function detectLangFromIP() {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
    if (!res.ok) throw new Error('ip-api failed');
    const data = await res.json();
    return getLangFromCountry(data.country_code) ?? getLangFromBrowser();
  } catch {
    return getLangFromBrowser();
  }
}

async function resolveInitialLang() {
  // If the user manually picked a language, always respect that choice
  const manual = localStorage.getItem(MANUAL_KEY);
  if (manual && SUPPORTED_LANGS.includes(manual)) return manual;

  // Otherwise always re-detect from IP (works correctly with VPN changes too)
  const detected = await detectLangFromIP();
  localStorage.setItem(STORAGE_KEY, detected);
  return detected;
}

// ─── Translation engine ───────────────────────────────────────────────────────

function t(lang, key) {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key] ?? translations.en[key];
    if (value !== undefined) {
      // Use innerHTML for keys that contain HTML spans (e.g. about.heading)
      if (value.includes('<')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = dict[key] ?? translations.en[key];
    if (value !== undefined) el.placeholder = value;
  });

  // aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    const value = dict[key] ?? translations.en[key];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  // Update html lang attr
  document.documentElement.lang = lang;

  // Highlight active language option in switcher
  document.querySelectorAll('.lang-option').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('text-brand-accent', isActive);
    btn.classList.toggle('font-semibold', isActive);
  });

  // Update the switcher label
  const currentLabel = document.getElementById('lang-current');
  if (currentLabel) currentLabel.textContent = lang.toUpperCase();
}

// ─── Language switcher UI ─────────────────────────────────────────────────────

function initSwitcher(currentLang) {
  const toggle = document.getElementById('lang-toggle');
  const dropdown = document.getElementById('lang-dropdown');

  if (!toggle || !dropdown) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    dropdown.classList.add('hidden');
  });

  document.querySelectorAll('.lang-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (!lang) return;
      // Mark as a deliberate manual choice so IP re-detection doesn't override it
      localStorage.setItem(MANUAL_KEY, lang);
      localStorage.setItem(STORAGE_KEY, lang);
      applyTranslations(lang);
      dropdown.classList.add('hidden');
    });
  });
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────
// Site is English-only for now (DE/ES toggle removed; 0% non-English traffic).
// Lock to English so IP-based detection never strands a visitor in a language
// they can't switch out of. Re-enable resolveInitialLang() when localisation returns.
applyTranslations('en');
initSwitcher('en');
