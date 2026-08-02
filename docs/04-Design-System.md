# Clinic Management System — Design System

## Purpose

This document defines the design language, architecture, and UI rules for the project.

The goal is consistency, maintainability, scalability, and a professional user experience.

---

# Design Principles

- Clean over flashy.
- Professional over trendy.
- Consistency over creativity.
- Accessibility first.
- Responsive by default.
- Every reusable UI belongs in the shared layer.

---

# Color System

Primary Color

- Primary 50 → 950
- Used for:
    - Primary buttons
    - Links
    - Active states
    - Focus rings
    - Progress indicators

Never hardcode colors inside components.

Always use Tailwind semantic utilities.

Example

bg-primary-600

text-primary-700

border-primary-500

---

# Typography

Headings

heading-1

heading-2

heading-3

Body

body-lg

body

body-sm

Caption

caption

Never use random text sizes.

---

# Spacing

Use Tailwind spacing scale.

Prefer

4
6
8
10
12
16

Avoid arbitrary spacing unless necessary.

---

# Border Radius

Cards

rounded-3xl

Inputs

rounded-xl

Buttons

rounded-xl

Badges

rounded-full

---

# Shadows

Cards

shadow-lg

Dialogs

shadow-xl

Hover

shadow-2xl

Avoid heavy shadows everywhere.

---

# Components

Shared components

- Button
- Input
- Card
- Alert
- Logo
- LanguageSwitcher

Feature components

Contain business logic.

Shared components never know about authentication or patients.

---

# Forms

Every form uses

- React Hook Form
- Zod
- Shared Input
- Shared Button
- Shared Alert

---

# Validation

Frontend

Zod

Backend

Laravel Validation

Backend remains the source of truth.

---

# Error Handling

Validation

Show below field.

Authentication

Show inside Alert.

Server

Show global Alert.

Offline

Show global Alert.

---

# Internationalization

Use i18next.

Namespaces

auth

validation

errors

common

Never hardcode strings.

---

# Theme

Tailwind v4

Semantic colors

Never use

text-blue-500

Instead

text-primary-600

---

# Icons

Heroicons only.

Keep icon size consistent.

Input

20px

Buttons

18–20px

Cards

24px

---

# Responsive Breakpoints

Mobile first.

Desktop enhancements only.

Hero disappears on mobile.

Form always remains usable.

---

# Animation

Short.

150–250ms.

Purposeful.

Never distracting.

---

# Naming

Components

PascalCase

Hooks

useSomething

Stores

somethingStore

Pages

SomethingPage

---

# Folder Philosophy

shared/

Reusable UI.

features/

Business logic.

layouts/

Application layouts.

app/

Configuration.

---

# Future Rules

Before creating a new component ask:

1. Will it be reused?
2. Does it contain its own logic?
3. Does it reduce complexity?

If all answers are "No", keep it inside the page.Admin

Dashboard

Patients

Doctors

Appointments

Laboratory

Billing

Reports

Settings