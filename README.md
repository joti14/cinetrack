# 🎬 CineTrack

A minimalist Movie Watchlist & Review interface built with React. Manage a dynamic list of movies, toggle their watched status, search and filter in real time — all client-side with localStorage persistence.

**Live Demo:** [https://cinetrack-eight-alpha.vercel.app](https://cinetrack-eight-alpha.vercel.app/)

## Features

- **Dashboard View** — responsive grid of movie cards showing title, genre, release year, and poster, with graceful fallback for broken poster URLs
- **Watched Toggle & Delete** — mark any movie as watched/unwatched or remove it from the list
- **Add Movie Form** — structured form with full client-side validation (required fields, valid year range, valid poster URL)
- **Status Filter** — tab switch to view All / Watched / Unwatched movies
- **Live Search** — real-time, case-insensitive filtering by movie title
- **Loading Skeletons** — simulated async fetch on first load with shimmer skeleton cards
- **Persistence** — watchlist state is saved to localStorage and survives page reloads

## Tech Stack

- [React 19](https://react.dev/) with hooks (`useState`, `useEffect`, `useMemo`, custom `useLocalStorage`)
- [Vite 8](https://vite.dev/) for development and production builds
- [Tailwind CSS 4](https://tailwindcss.com/) with a custom cinema-inspired theme

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm (comes bundled with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joti14/cinetrack.git
   cd cinetrack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build     # outputs an optimized build to /dist
npm run preview   # serve the production build locally
```

## Project Structure

```
src/
├── components/
│   ├── AddMovieForm.jsx    # form with client-side validation
│   ├── EmptyState.jsx      # shown when no movies match
│   ├── FilterBar.jsx       # status tabs + search input
│   ├── Header.jsx          # app header with watch stats
│   ├── MovieCard.jsx       # single movie card with actions
│   ├── MovieGrid.jsx       # responsive grid / skeleton / empty states
│   └── SkeletonCard.jsx    # loading placeholder card
├── data/
│   └── movies.js           # hardcoded seed data
├── hooks/
│   └── useLocalStorage.js  # state persistence hook
├── App.jsx                 # state management & filtering logic
├── index.css               # Tailwind entry + custom styles
└── main.jsx                # app entry point
```

## Deployment

Deployed on [Vercel](https://vercel.com/): import the GitHub repository, and Vercel auto-detects the Vite setup — no extra configuration needed. Every push to `main` triggers a new production deployment.
