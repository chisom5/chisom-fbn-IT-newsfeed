# NewsOnline

A Vite + React news feed starter based on the FirstBank frontend case study.

## Getting started

1. Install dependencies:
   pnpm install
2. Start the dev server:
   pnpm run dev
3. Build for production:
   pnpm run build

## Notes

- The app uses Vite, React, Tailwind CSS, Axios, Shadcn(Radix UI), Tanstack Query.
- API calls are set up under `src/api` and a reusable fetch hook exists under `src/hooks`.
- Update `.env` with a valid NewsAPI key if you want live data:
  VITE_NEWS_API_KEY=your_key_here
