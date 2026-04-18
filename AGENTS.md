# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server (port 3000, fast refresh)
- `npm run build` — Type-check (`tsc -b`) then bundle (`vite build`)
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

No test runner is configured.

## Architecture

Photo delivery frontend app — Vite + React 19 + TypeScript. Expects a backend API at `http://localhost:8000/api` (hardcoded in `src/api/api.ts`).

### State & API

- **Redux Toolkit** store in `src/redux/index.ts`. Typed hooks (`useAppDispatch`, `useAppSelector`) exported from there.
- **RTK Query** is the API layer. Base `api` created in `src/api/api.ts`; feature endpoints injected via `api.injectEndpoints` (see `src/api/userApi.ts`). Auth token attached in `prepareHeaders` from `authSlice.accessToken`.
- **Auth slice** (`src/redux/authSlice/`) manages `accessToken`, `userData`, and `userLoginState`. Login/auth-check flows dispatch state transitions via RTK Query `onQueryStarted`.
- Redux Logger enabled in dev mode (`import.meta.env.MODE`).

### Routing

- React Router v7 with `createBrowserRouter` in `src/routes/index.tsx`.
- Pages lazy-loaded via `React.lazy` in `src/routes/lazyImports.ts`.
- Routes use custom `CustomRouteObject` with `name` and `isAdmin` fields; a helper extracts nav items from the route tree for the sidebar menu.
- Three route tiers via `AuthGuard`: PUBLIC (login/register), PRIVATE (dashboard/profile, wrapped in `LayoutWrapper`), ADMIN (user management).

### Theming

- MUI v7 theming with light/dark mode support.
- `ThemeProviderWrapper` in `src/theme/index.tsx` composes MUI's `ThemeProvider` with a custom `ThemeContext` for mode toggling.
- Theme hooks live in `src/theme/hooks/` — `useSimpleTheme` (mode state + localStorage persistence), `useThemeConfig` (builds MUI theme object), `useThemeContext` (consumer hook).
- Palette, typography, and component overrides defined in `src/theme/themeOptions/`.
- Utility functions (`glassmorphism`, `gradients`) in `src/theme/utils.ts`.
- `ThemeToggle` component provides icon/switch/menu variants.

### Layout

- `LayoutWrapper` (`src/components/LayoutWrapper/`) provides the app shell with `NavBar` and `NavMenu` sidebar for authenticated routes.

## Conventions

- Use `api.injectEndpoints` for new API endpoints; export generated hooks.
- Folders expose `index.ts` barrel files — follow this pattern.
- UI uses MUI components + Emotion styled. Forms use Formik + Yup.
- Use MUI theme tokens (e.g., `'primary.main'`, `theme.spacing()`) instead of hardcoded values.
- TypeScript composite build (`tsc -b`) — new path aliases may require `tsconfig.*` updates.
