# Host.Hive website

Built with [Next.js](https://nextjs.org) (App Router) and React 19.

## Scripts

- `npm run dev` runs the app at http://localhost:3000 with hot reload.
- `npm run build` creates a production build in `.next/`.
- `npm start` serves the production build. Run `npm run build` first.

## Structure

- `src/app/` holds the routes: `/` (layout, page), `/portfolio`, `/gallery`, `/contact`.
- `src/Components/` holds the page components and the header and footer.
- `public/` holds static files served from the site root (favicon, `robots.txt`, `sitemap.xml`, Google verification file).

## Environment

Copy `.env.example` to `.env.local` if you need the variables it lists. Next.js reads variables prefixed with `NEXT_PUBLIC_` in the browser.
