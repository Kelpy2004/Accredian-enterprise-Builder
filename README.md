# Accredian Enterprise Page

Partial clone of the Accredian Enterprise landing page built with Next.js App Router, React functional components, Tailwind CSS, and API routes for catalog data and lead capture.

## Live Demo

Deployed on Vercel: https://accredian-enterprise-liard-nine.vercel.app

Reference website: https://enterprise.accredian.com/

## Tech Stack

- Next.js App Router
- React functional components and hooks
- Tailwind CSS
- API routes for mock catalog data and lead submission
- Vercel deployment

## Assignment Checklist

- Landing page with all major sections: hero, stats, clients, Accredian Edge, CAT/programs, how it works, FAQs, testimonials, lead form, and footer.
- Navigation menu and footer included.
- Fully responsive layout for mobile and desktop.
- Smooth navigation between sections from the navbar.
- Reusable component structure under `artifacts/accredian-enterprise/app/components`.
- API integration through Next.js API routes under `artifacts/accredian-enterprise/app/api`.
- Deployed on Vercel.
- AI usage documented below.

## Running Locally

```bash
pnpm install
pnpm --filter @workspace/accredian-enterprise run dev
```

The app runs on port `24119` by default.

## Project Location

The Next.js app is located at:

```text
artifacts/accredian-enterprise
```

## Features

- Responsive landing page with navigation, hero, client strip, solutions, programs, stats, testimonials, lead form, FAQs, and footer.
- Smooth section navigation.
- Reusable section and UI components.
- API routes for catalog content, health checks, and lead submission.
- Lead submission endpoint with schema validation.

## AI Usage

AI tools helped with:

- Planning the page structure based on the Accredian Enterprise reference website.
- Creating reusable Next.js components for the landing page sections.
- Improving responsive Tailwind CSS layouts for desktop and mobile.
- Setting up smooth section navigation from the navbar.
- Reviewing the implementation against the assignment requirements.
- Debugging build/deployment issues and preparing the project for submission.

Manual work included:

- Refining the section order, navbar links, and scroll behavior to match the reference site.
- Reviewing and adjusting the final UI, copy, and responsiveness.
- Wiring API routes and form validation.
- Deploying the site to Vercel.
- Cleaning generated files and platform-specific files before pushing to GitHub.
