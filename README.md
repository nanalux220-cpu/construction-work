# FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS

A standalone website for **FRANSARE 40 ENGINEERING & CONSTRUCTION WORKS** in Kumasi, Ghana. The pages follow the ArchLine construction theme (layout, colours, type, and section order) and do not use WordPress.

Verified business details from the Google Business Profile are used for the name, Kumasi address, phone, hours, about text, and the services the business offers. The theme logo, email address, social links, project stories, testimonials, blog articles, statistics, and sustainability block are still the theme placeholders, ready to be replaced later.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` typechecks the project and writes the static site to `dist/`. `npm run preview` serves that folder at `http://localhost:4173`.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home |
| `/about` | About the business, plus the theme team block |
| `/services` | Building construction, building designs, maintenance and renovation, civil engineering |
| `/services/:slug` | Service detail |
| `/projects` | Portfolio with category filters |
| `/projects/:slug` | Project detail and image gallery |
| `/blog` | Articles, search, categories, and archives |
| `/blog/:slug` | Article |
| `/contact` | Quote form, phone, address, hours, and a map link |
| `/privacy`, `/terms` | Privacy and terms |

The header phone and WhatsApp link both use **+233 24 385 3715**. The contact form checks required names and email, optional phone, and a 180-character message, then shows a thank-you state. The enquiry is stored in this browser only.

## Stack

React, TypeScript, and Vite. Routing is client-side. Photography and the logo live in `public/images`.
