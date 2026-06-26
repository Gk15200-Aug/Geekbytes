---
title: "KMP vs CMP: Kotlin Multiplatform vs Compose Multiplatform — What to Share and When (2026)"
description: "A practical guide to Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP) — what each shares, how they work together, and which approach fits your project in 2026."
pubDate: "2026-06-26"
updatedDate: "2026-06-26"
author: "Ethan Walker"
tags: ["Mobile App Development", "Kotlin", "Cross-Platform", "Android", "iOS"]
readingTime: 9
---

If you're building a mobile app in 2026 with Kotlin, you've probably seen two terms thrown around: **KMP** (Kotlin Multiplatform) and **CMP** (Compose Multiplatform). They sound similar, they're both from JetBrains, and they're often mentioned together — but they solve fundamentally different problems.

> **Our hands-on experience:** GeekBytes has built cross-platform mobile apps using KMP for shared business logic and CMP for shared UI. We've migrated existing Android apps to KMP and built greenfield projects with the full KMP + CMP stack. This guide is based on real implementation decisions, not marketing copy.

Here's the simple version: **KMP shares logic. CMP shares UI.** Together, they let you build once and reach Android, iOS, Desktop, and Web from a single Kotlin codebase.

## What is Kotlin Multiplatform (KMP)?

Kotlin Multiplatform is a technology that lets you write **shared business logic** in Kotlin and use it across multiple platforms — Android, iOS, Desktop, and Web (via Wasm).

KMP's purpose is straightforward: write your core logic once, then let each platform handle its own UI natively.

### What You Share with KMP

- **Networking** — API calls, HTTP clients (Ktor)
- **Database** — Local persistence (SQLDelight, Room KMP)
- **Repository layer** — Data access patterns
- **Use Cases** — Business rules and domain logic
- **ViewModels** — Presentation logic and state management
- **Domain Layer** — Models, validation, transformations
- **Platform APIs** — via `expect`/`actual` declarations for platform-specific implementations

### What You Don't Share with KMP

- **UI (User Interface)** — each platform renders its own native UI

This means your Android app uses Jetpack Compose, your iOS app uses SwiftUI, and they both call the same shared Kotlin logic underneath.

## What is Compose Multiplatform (CMP)?

Compose Multiplatform extends KMP by adding **shared UI** on top of shared logic. It uses JetBrains' implementation of Jetpack Compose — the same declarative UI framework Android developers already know — and makes it run on iOS, Desktop, and Web too.

### What You Share with CMP

- **Screens** — Full UI screens written in Compose
- **Navigation** — App navigation flows and routing
- **Components** — Reusable UI components (buttons, cards, lists)
- **Themes** — Colours, spacing, design tokens
- **Typography & Design System** — Consistent look across platforms
- **UI State** — State management tied to UI
- **Resources** — Images, fonts, strings, icons

### The Key Formula

**CMP = KMP + Shared UI**

When you use CMP, you're automatically using KMP underneath for the logic layer. CMP adds the UI layer on top.

## How They Work Together

Think of it as two layers of a stack:

```
┌─────────────────────────────┐
│   CMP (UI Layer)            │  ← Shared screens, components, themes
│   Compose Multiplatform     │
├─────────────────────────────┤
│   KMP (Logic Layer)         │  ← Shared networking, database, business logic
│   Kotlin Multiplatform      │
├─────────────────────────────┤
│   Platform (Android/iOS/    │  ← Platform-specific APIs, permissions,
│   Desktop/Web)              │     sensors, native integrations
└─────────────────────────────┘
```

You can use **KMP alone** (shared logic, native UI per platform) or **KMP + CMP together** (shared logic AND shared UI). You cannot use CMP without KMP — the logic layer is always there.

## What Gets Shared: Side by Side

| Layer | With KMP Only | With KMP + CMP |
|-------|--------------|----------------|
| Business Logic | ✅ Shared | ✅ Shared |
| Networking | ✅ Shared | ✅ Shared |
| Database | ✅ Shared | ✅ Shared |
| Repositories | ✅ Shared | ✅ Shared |
| Use Cases | ✅ Shared | ✅ Shared |
| ViewModels | ✅ Shared | ✅ Shared |
| Screens | ❌ Native per platform | ✅ Shared |
| Navigation | ❌ Native per platform | ✅ Shared |
| Components | ❌ Native per platform | ✅ Shared |
| Themes | ❌ Native per platform | ✅ Shared |
| Design System | ❌ Native per platform | ✅ Shared |
| UI State | ❌ Native per platform | ✅ Shared |

**Code sharing with KMP alone:** ~50–70% of your codebase
**Code sharing with KMP + CMP:** ~85–95% of your codebase

## When to Use KMP (Without CMP)

Use KMP with native UI when:

- **You have an existing Android app** and want to gradually share logic with a new or existing iOS app without rewriting the UI
- **You want to keep native UI** — SwiftUI on iOS, Jetpack Compose on Android — for maximum platform-native feel
- **You want to share business logic only** — networking, database, domain rules — while each platform team owns their UI
- **You prefer gradual migration** — you can adopt KMP incrementally, module by module, without touching existing UI code

### Best for:
- Companies with separate Android and iOS teams
- Apps where platform-native UX is a top priority (banking, health, system-level apps)
- Existing apps migrating to cross-platform logic without a UI rewrite

## When to Use CMP (KMP + Compose Multiplatform)

Use the full CMP stack when:

- **You're starting a new project** from scratch with no existing codebase to maintain
- **You want maximum code sharing** — one codebase for UI and logic across all platforms
- **You have a small team** that can't maintain separate UI codebases for Android and iOS
- **You want faster development** — one set of screens, one design system, one set of tests

### Best for:
- Startups building their first app
- Small teams (1–4 developers) who need to ship on both platforms
- Apps where consistent cross-platform UI is acceptable (productivity tools, internal apps, B2B apps)
- Projects targeting Android + iOS + Desktop or Web simultaneously

## Platform Support in 2026

| Platform | KMP | CMP |
|----------|-----|-----|
| Android | ✅ Stable | ✅ Stable |
| iOS | ✅ Stable | ✅ Stable (as of 2024) |
| Desktop (JVM) | ✅ Stable | ✅ Stable |
| Web (Wasm) | ✅ Stable | ⚠️ Alpha/Beta |

CMP for iOS reached stable in 2024, making the full KMP + CMP stack production-ready for mobile in 2026. Web support via Kotlin/Wasm is progressing but not yet recommended for production web apps.

## How Does This Compare to Flutter and React Native?

| Factor | KMP + CMP | Flutter | React Native |
|--------|-----------|---------|--------------|
| Language | Kotlin | Dart | JavaScript/TypeScript |
| UI Rendering | Compose (Skia on iOS) | Custom engine (Skia/Impeller) | Native components |
| Code sharing | 85–95% | 90–95% | 70–90% |
| Native feel | High (Android native, iOS via Compose) | Custom (consistent but not native) | Native components |
| Existing Android team | ✅ Perfect fit | Requires Dart learning | Requires JS/React learning |
| iOS interop | Good (Kotlin/Native) | Platform channels | Native modules |
| Ecosystem maturity | Growing fast | Mature | Mature |

**Choose KMP/CMP if:** Your team knows Kotlin, you have an existing Android app, or you want the cleanest path from Android-first to cross-platform.

**Choose Flutter if:** You're starting fresh with no Kotlin investment and want the most mature cross-platform option.

**Choose React Native if:** Your team knows JavaScript/React and you want to share code with a web app.

## Real-World Architecture: KMP + CMP Project

Here's what a typical KMP + CMP project structure looks like:

```
my-app/
├── shared/                    # KMP shared module
│   ├── src/commonMain/        # Shared logic (all platforms)
│   │   ├── data/              # Repositories, API clients
│   │   ├── domain/            # Use cases, models
│   │   └── presentation/     # ViewModels, state
│   ├── src/androidMain/       # Android-specific implementations
│   └── src/iosMain/           # iOS-specific implementations
├── composeApp/                # CMP shared UI
│   ├── src/commonMain/        # Shared screens, components, themes
│   ├── src/androidMain/       # Android entry point
│   └── src/iosMain/           # iOS entry point
├── androidApp/                # Android application module
└── iosApp/                    # iOS application (Xcode project)
```

## Cost Comparison

Building with KMP + CMP vs. separate native apps:

| Approach | Typical Cost | Timeline |
|----------|-------------|----------|
| Separate Native (Android + iOS) | $40,000–$150,000 | 16–24 weeks |
| KMP only (shared logic, native UI) | $25,000–$90,000 | 12–20 weeks |
| KMP + CMP (shared logic + UI) | $15,000–$70,000 | 8–16 weeks |

At GeekBytes, we build mobile apps starting at **$12/hour** — with KMP, CMP, Flutter, or React Native depending on your project's needs.

## The Final Takeaway

- **KMP** = Share business logic across platforms. Keep native UI.
- **CMP** = Share business logic AND UI across platforms.
- **CMP = KMP + Shared UI** — they're complementary, not competing.
- **Use KMP alone** when you have existing apps or need platform-native UI.
- **Use KMP + CMP** when starting fresh and want maximum code sharing with a small team.

In 2026, the KMP + CMP stack is production-ready and represents the most Kotlin-native path to cross-platform development. If your team already writes Kotlin, you don't need to learn Dart or JavaScript — you can build once and reach everywhere.

---

Building a cross-platform app and not sure which approach fits? [Book a free consultation with the GeekBytes team](/services/mobile-app-development) — we'll assess your project, team, and timeline to recommend the right stack.
