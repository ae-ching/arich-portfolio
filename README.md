# Arich Dalle Bolivar — Personal E-Portfolio

A modern editorial/minimal-tech portfolio for an Information Systems student seeking internship and entry-level opportunities.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **CSS Custom Properties** — Styling (no CSS-in-JS dependency)
- **Lucide React** — Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Asset Placement

Place your images and resume in `public/assets/`:

```
public/assets/
├── profile.jpg      # Your profile photo (square, ~400x400px)
├── fishpond.jpg     # Fishpond project screenshot (16:9 or 4:3)
├── booking.jpg      # Booking system screenshot (16:9)
├── mini-games.jpg   # Mini games screenshot (16:9)
├── lost-found.jpg   # Lost & found app screenshot (16:9)
└── resume.pdf       # Your resume PDF
```

## Design Notes

- **Dark green theme** with warm off-white/cream accents
- **Sticky sidebar navigation** on desktop, hamburger menu on mobile
- **Resume opens in new tab** — no dedicated resume section
- **Fishpond project is the featured highlight** — other projects are secondary
- **Analysis/documentation work** presented as polished cards, not afterthoughts
