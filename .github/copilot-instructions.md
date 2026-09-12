# GitHub Copilot Instructions: FirstBank Analyst Frontend Case Study

## 1. Project Overview & Objective
- **Project Type:** News Feed / Article Explorer Assessment (Case Study).
- **Figma Design Link:** [FirstBank Frontend Task Design](https://www.figma.com/file/dscY8VQmQ1GyAlh5cO32qw/FirstBankFrontendTask?node-id=0%3A1)
- **Core Requirements:**
  - Consume news feed from `newsapi.org`.
  - Replicate provided Figma design layout precisely (responsive cards, typography, grid, layout constraints).
  - Ensure high visual accuracy to the provided Figma design source.

---

## 2. Tech Stack & Ecosystem
- **Framework:** React.js (Vite / Functional Components / Hooks).
- **Styling & Layout:** Tailwind CSS responsive layout, spacing, responsive breakpoints, and grid designs.
- **UI Components:** `shadcn/ui` built on top of Radix UI primitives for accessible, customizable components (Cards, Dialogs, Loading Skeletons).
- **HTTP Client:** Axios and Tanstack Query for asynchronous API fetching and request handling.
- **Icons:** Lucide React matching Figma design specs.

---

## 3. Architecture & Folder Structure
Follow a clean feature/layer structure:

```text
.github/
├── copilot-instructions.md   # Project rules and instructions 
src/
├── api/
│   ├── axiosInstance.js     # Base Axios client with baseURL and API key defaults
│   └── newsApi.js           # API calls for fetching top headlines / everything
├── components/
│   ├── ui/                  # shadcn/ui primitives (Button, Card, Skeleton)
│   ├── ArticleCard.jsx      # News item card component
│   ├── ArticleGrid.jsx      # Grid layout for news feed
|   ├── ArticlePagination.jsx    # Pagination of news feed
|   ├── EmptyState.jsx           # Empty state view of news feed
|   ├── ArticleSkeletonGrid.jsx  # skeleton for initial loading state of news feed.
│   └── Navbar.jsx           # Top header navigation
├── hooks/
│   └── useFetchNews.js      # Custom hook for news fetching, loading & error states
├── utils/
│   └── formatters.js        # Date and text string utility functions
|   └── sanitizeParams.js     # sanitize request parameter before making api calls.
└── App.jsx

