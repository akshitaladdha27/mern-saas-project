# SaaS Landing + Dashboard (Next.js)

A full-featured frontend project built for a MERN Frontend Shortlisting Assignment.

This project includes:

* Pixel-close SaaS landing page (Figma-based)
* Authentication system (fake token-based)
* Dashboard with real API integration
* Settings with theme persistence
* Fully responsive UI

Built using **Next.js + Tailwind CSS**.

---

# Tech Stack

* Next.js (App Router)
* React
* Tailwind CSS
* JSONPlaceholder API
* localStorage (for auth + theme persistence)

---

# Setup Instructions

## 1️ Clone the repository

```bash
git clone https://github.com/your-username/saas-dashboard.git
cd saas-dashboard
```

## 2️ Install dependencies

```bash
npm install
```

## 3️ Run development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# Features Checklist

## Part A – Landing Page (Figma Match)

* [x] Pixel-close layout
* [x] Correct spacing & typography
* [x] Section order matches design
* [x] Button styles & cards
* [x] Hover + focus states
* [x] Responsive design
* [x] No horizontal overflow

---

## Part B – Authentication

* [x] /login page
* [x] /signup page
* [x] Fake auth using localStorage
* [x] Protected dashboard routes
* [x] Logout clears token
* [x] Dynamic navbar (Login / Dashboard / Logout)

---

## Part C – Dashboard (API Integration)

### Dashboard Summary

* [x] Total users count
* [x] Status cards
* [x] Loading state

### Users Page

* [x] API integration
* [x] List view
* [x] Search (name/email)
* [x] Sort (A–Z / Z–A)
* [x] Client-side pagination
* [x] User detail modal
* [x] Loading + error states
* [x] Empty state handling

### Settings Page

* [x] Profile form
* [x] Theme toggle (light/dark)
* [x] Settings persisted in localStorage

---

# Project Structure

```
app/
  page.tsx
  login/
  signup/
  dashboard/
    layout.tsx
    page.tsx
    users/
      page.tsx
    settings/
      page.tsx

components/
  landing/
  ProtectedRoute.tsx
```

---

# Key Decisions & Tradeoffs

### 1️ Next.js App Router

Used for:

* Clean routing
* Shared layouts
* Production-ready structure

---

### 2️ Fake Authentication

Used localStorage token to:

* Simulate authentication
* Protect routes

Tradeoff:
Not production secure (demo purpose only).

---

### 3️ Client-side Pagination

Implemented on frontend because JSONPlaceholder does not provide full pagination logic.

---

### 4️ Theme Persistence

Theme and profile data stored in localStorage for simplicity and speed.

---

# Accessibility & UX

* Semantic HTML elements
* Keyboard accessible forms
* Visible focus states
* Responsive design
* Loading and error handling

---

# Future Improvements

* Server-side authentication
* Backend-based pagination
* Role-based access control
* Skeleton loaders
* Unit testing

---

# Conclusion

This project demonstrates:

* Figma-to-code accuracy
* Clean architecture
* API integration
* State management
* Responsive UI
* Scalable folder structure

---

## Author

Your Name
GitHub: [https://github.com/your-username](https://github.com/your-username)
