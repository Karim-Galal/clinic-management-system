# 06 - Authentication

## Overview

This project uses **Laravel Sanctum with Session Authentication** instead of JWT.

The frontend and backend are developed as separate applications:

* **Backend:** Laravel 12 + Sanctum + Breeze API
* **Frontend:** React + Vite + React Router + Zustand + Axios

Although they are separate projects, the React application behaves as a **first-party Single Page Application (SPA)**. Authentication is handled through **sessions and cookies**, allowing Laravel to manage authentication securely.

---

# Why Session Authentication Instead of JWT?

There are two common authentication approaches for modern web applications:

## JWT (Token Authentication)

The server generates a token after login. The frontend stores this token (usually in Local Storage or Cookies) and sends it with every request.

### Advantages

* Works well for third-party APIs.
* Good for mobile applications.
* Stateless authentication.

### Disadvantages

* More complex logout flow.
* Token expiration and refresh logic.
* Higher risk if tokens are stored insecurely.
* More authentication logic on the frontend.

---

## Session Authentication (Sanctum)

Laravel creates a server-side session after login.

The browser automatically stores the session cookie and sends it with every request.

### Advantages

* More secure for first-party web applications.
* Laravel manages sessions automatically.
* No token management inside React.
* Simpler frontend architecture.
* Built-in CSRF protection.

### Why This Project Uses Sanctum

This clinic management system is primarily a **web application**.

The React frontend and Laravel backend are developed separately but belong to the same application.

This is exactly the problem Sanctum was designed to solve.

---

# Authentication Architecture

Authentication follows a layered architecture.

```text
Login Page
        │
        ▼
Auth Store (Zustand)
        │
        ▼
Auth Service
        │
        ▼
Axios Instance
        │
        ▼
Laravel API
        │
        ▼
Database
```

Each layer has a single responsibility.

---

# Layer Responsibilities

## Login Page

Responsibilities:

* Display the login form.
* Collect user input.
* Show validation errors.
* Submit the form.

The page **never** communicates with Laravel directly.

---

## Auth Store

Responsibilities:

* Manage authentication state.
* Store the authenticated user.
* Track loading state.
* Store backend validation errors.
* Expose authentication actions.

The store never knows how HTTP requests are made.

---

## Auth Service

Responsibilities:

* Communicate with Laravel.
* Call authentication endpoints.
* Keep API endpoints in one place.

The service contains no UI logic.

---

## Axios Instance

Responsibilities:

* Base URL configuration.
* Send cookies.
* Send CSRF token automatically.
* Common headers.
* Shared HTTP configuration.

Instead of configuring Axios inside every service, one configured instance is shared across the application.

---

## Laravel Backend

Responsibilities:

* Validate credentials.
* Create sessions.
* Protect routes.
* Return authenticated user.
* Handle business logic.

---

# Authentication Flow

```text
User submits login form
        │
        ▼
React Hook Form
        │
        ▼
Zod Validation
        │
        ▼
Auth Store
        │
        ▼
Auth Service
        │
        ▼
GET /sanctum/csrf-cookie
        │
        ▼
Laravel creates:

• Session Cookie

• CSRF Cookie

        │
        ▼
POST /login
        │
        ▼
Laravel authenticates user
        │
        ▼
GET /api/user
        │
        ▼
Authenticated user stored inside Zustand
        │
        ▼
React updates the UI
```

---

# CSRF Protection

## What is CSRF?

CSRF stands for:

**Cross-Site Request Forgery**

It is an attack where another website attempts to perform actions on behalf of an authenticated user without their permission.

Example:

A malicious website attempts to submit a money transfer request while the user is logged into the clinic system.

Laravel blocks these requests using CSRF tokens.

---

# CSRF Flow

Before login, the frontend requests:

```
GET /sanctum/csrf-cookie
```

Laravel returns:

* XSRF-TOKEN cookie
* laravel-session cookie

Axios automatically reads the XSRF cookie and sends it back as:

```
X-XSRF-TOKEN
```

Laravel verifies the token.

If the token is valid:

Authentication continues.

Otherwise:

```
419 Page Expired
```

is returned.

---

# Why Cookies?

The browser automatically stores cookies.

The frontend does **not** manually save authentication tokens.

This reduces complexity and improves security.

---

# Axios Configuration

The application uses a shared Axios instance.

Responsibilities:

* Base URL
* Credentials
* CSRF
* Default headers

Configuration:

```javascript
baseURL: import.meta.env.VITE_API_URL

withCredentials: true

withXSRFToken: true

headers: {

    Accept: "application/json",

    "Content-Type": "application/json",

}
```

## Why use a shared Axios instance?

Without it, every service would need to repeat the same configuration.

Centralizing Axios makes maintenance easier and keeps HTTP configuration consistent.

---

# Validation

Client-side validation uses:

* React Hook Form
* Zod

Responsibilities:

* Required fields
* Email format
* Password rules

This provides immediate feedback before requests reach Laravel.

Server-side validation still exists and remains the source of truth.

---

# Authentication State

Authentication state is stored in Zustand.

Current state includes:

* user
* isAuthenticated
* loading
* errors

This allows every component in the application to react to authentication changes without prop drilling.

---

# Why Components Never Call Axios Directly

Bad architecture:

```
Component

↓

Axios

↓

Laravel
```

Good architecture:

```
Component

↓

Store

↓

Service

↓

Axios

↓

Laravel
```

Benefits:

* Separation of concerns.
* Easier testing.
* Easier maintenance.
* Reusable business logic.
* Better scalability.

---

# Common Authentication Endpoints

```
GET    /sanctum/csrf-cookie

POST   /login

POST   /logout

POST   /register

GET    /api/user
```

---

# Lessons Learned During Development

Building authentication involved debugging several real-world issues.

Important lessons:

* Frontend and backend origins must be configured correctly.
* CORS must allow credentials.
* Sanctum requires stateful domains to be configured.
* Configuration changes often require:

```
php artisan optimize:clear
```

* Browser Developer Tools are essential for debugging cookies and headers.
* Postman and browsers behave differently when working with session authentication.
* A `419 Page Expired` error usually indicates a CSRF or session problem rather than incorrect login credentials.
* Consistently using the same hostname (for example, using `127.0.0.1` everywhere or `localhost` everywhere) helps avoid cookie and domain mismatches during development.

---

# Current Authentication Features

Completed:

* Laravel Breeze API authentication
* Laravel Sanctum
* Session authentication
* CSRF protection
* Shared Axios instance
* React Hook Form
* Zod validation
* Zustand authentication store
* Authentication service layer
* Login page
* User retrieval endpoint

Planned improvements:

* Authentication initialization on application startup.
* Protected routes.
* Guest-only routes.
* Google Sign-In.
* Forgot password.
* Email verification.
* Two-factor authentication (optional).

---

# Architectural Decisions

1. Session authentication was chosen instead of JWT for a first-party SPA.
2. React components never communicate with Laravel directly.
3. Axios configuration is centralized.
4. Authentication state is managed through Zustand.
5. Form validation is handled by React Hook Form and Zod.
6. Business logic remains on the Laravel backend.
7. Every feature in the application will follow the same layered architecture:

```
Page

↓

Store

↓

Service

↓

Axios

↓

Laravel
```

This consistency makes the project easier to maintain, easier to extend, and closer to the architecture used in professional Laravel + React applications.
Admin
    Responsibilities
    Permissions
    Dashboard

Doctor
    Responsibilities
    Permissions
    Dashboard

Receptionist
    Responsibilities
    Permissions
    Dashboard

Nurse

Pharmacist

Laboratory

Cashier

Patient