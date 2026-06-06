const form = document.getElementById('contact-form');
if (form) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(field, msg) {
    clearError(field);
    field.setAttribute('aria-invalid', 'true');
    const errId = field.id + '-error';
    const p = document.createElement('p');
    p.id = errId;
    p.className = 'text-red-400 text-xs mt-1';
    p.textContent = msg;
    field.setAttribute('aria-describedby', errId);
    field.parentElement.appendChild(p);
  }

  function clearError(field) {
    field.removeAttribute('aria-invalid');
    const errId = field.id + '-error';
    const existing = document.getElementById(errId);
    if (existing) existing.remove();
    field.removeAttribute('aria-describedby');
  }

  form.addEventListener('submit', (e) => {
    const name = form.querySelector('#full-name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    let valid = true;

    [name, email, message].forEach(clearError);

    if (!name.value.trim()) { showError(name, 'Full name is required.'); valid = false; }
    if (!email.value.trim()) { showError(email, 'Email is required.'); valid = false; }
    else if (!emailRegex.test(email.value.trim())) { showError(email, 'Please enter a valid email address.'); valid = false; }
    if (!message.value.trim()) { showError(message, 'Message is required.'); valid = false; }

    if (!valid) {
      e.preventDefault();
    }
    // If valid, form submits normally to formsubmit.co
  });
}
