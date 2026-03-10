# Technical Documentation

## 1. Overview

This portfolio is a static, client-side website built with **HTML5**, **CSS3**, and **vanilla JavaScript**. No frameworks, build tools, or server-side logic are used. The site is responsive and includes a dark mode toggle.

| Layer    | Technology        |
|----------|-------------------|
| Markup   | HTML5             |
| Styling  | CSS3 (Flexbox, Grid) |
| Behavior | Vanilla JavaScript |
| Assets   | Images in `assets/images/` |

---

## 2. Project Structure

```
assignment-1/
├── index.html          # Single-page structure
├── css/
│   └── styles.css      # All styles (reset, layout, dark mode)
├── js/
│   └── script.js       # Dark mode toggle
├── assets/
│   └── images/         # Project screenshots (e.g. ghostwriter.png, passwordToolKit.png)
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md  # This file
```

---

## 3. HTML Structure

- **Doctype & meta:** `UTF-8`, viewport for responsive behavior, `lang="en"`.
- **Sections (in order):**
  - **Header:** `<nav>` with logo, in-page links (`#hero`, `#about`, `#projects`, `#contact`), and “Toggle Dark Mode” button.
  - **Main:**
    - `#hero` — Welcome and short intro.
    - `#about` — About Me text.
    - `#projects` — `h2` + `.project-grid` of `.project-card` items (title, description, image).
    - `#contact` — Form with `name`, `email`, `message` (labels associated via `for`/`id`), `required` attributes, `action="#"`, `method="post"`.
  - **Footer:** Copyright text.

- **Script:** Single external script: `js/script.js` (loaded at end of `<body>`).
- **Images:** Project images are referenced from `assets/images/` (e.g. `placeholder.png`, or `ghostwriter.png` / `passwordToolKit.png` if you have renamed them). Each `<img>` has an `alt` attribute for accessibility.

---

## 4. CSS Architecture

### 4.1 Reset & base

- Universal reset: `* { margin: 0; padding: 0; box-sizing: border-box; }`.
- `body`: `sans-serif`, `line-height: 1.6`, default text color `#333`.

### 4.2 Layout

- **Navigation:** Flexbox (`display: flex`, `justify-content: space-between`, `align-items: center`). Logo on the left, list of links and button on the right; list items use `display: flex` and `gap`.
- **Hero & About:** Flexbox column, centered content (`align-items: center`, `text-align: center`), vertical padding.
- **Projects:** CSS Grid on `.project-grid`:
  - `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`
  - Cards wrap and grow on larger screens; on small screens they stack. No media queries needed for this behavior.
- **Project cards:** Border, padding, border-radius, white background; internal flex column for consistent card layout.
- **Contact form:** Flex column, `max-width: 500px`, `margin: 0 auto` for horizontal centering, `gap` between fields.
- **Footer:** Centered text, padding, background color.

### 4.3 Dark mode

- Implemented by toggling a `.dark-mode` class on `<body>` from JavaScript.
- Dark theme overrides:
  - `body`: dark background (`#282c34`), light text (`#f2f4f5`).
  - `nav` and `footer`: darker background (`#5c6370`).
  - `.project-card`: transparent background, darker border.
  - Form controls: dark background and border, light text.
  - Nav links: accent color (e.g. `#c678dd`).

---

## 5. JavaScript

- **`darkModeToggle()`:**  
  `document.body.classList.toggle('dark-mode');`  
  Called by the “Toggle Dark Mode” button’s `onclick`. No persistence (preference resets on reload); could be extended with `localStorage` if needed.

---

## 6. Assets

- **Location:** `assets/images/`.
- **Usage:** Project cards display one image per project. In `index.html`, images are referenced by path (e.g. `assets/images/placeholder.png`). If you use `ghostwriter.png` and `passwordToolKit.png`, update the `src` (and keep `alt` text aligned with project names for accessibility).

---

## 7. Accessibility

- Semantic sections: `header`, `nav`, `main`, `section`, `footer`.
- Headings hierarchy: one `h1`, then `h2` per section, `h3` per project.
- Form: `<label for="...">` and matching `id` on inputs; `required` on required fields.
- Images: descriptive `alt` (e.g. “Ghost Writer project”, “Password Toolkit project”).
- Dark mode: contrast handled in CSS; toggle is a `<button>` (focusable and activatable by keyboard).

---

## 8. Responsive Design

- Viewport meta tag enables correct scaling on mobile.
- Project grid is responsive via `repeat(auto-fit, minmax(300px, 1fr))`: columns appear when width allows, otherwise cards stack.
- Nav uses flexbox with `gap`; on very small screens it may wrap or need future media-query adjustments (e.g. hamburger menu) if desired.

---

## 9. Browser Support

- Targets modern browsers that support:
  - CSS Flexbox and Grid
  - `classList.toggle`
  - HTML5 form elements and attributes  
  No polyfills or fallbacks are included.
