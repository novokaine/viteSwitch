# Copilot instructions — viteSwitch

This file helps AI coding agents get productive quickly in this repository.

Short summary

- Project: Vite + React + TypeScript app (src/). Uses RTK + RTK Query, React Router, MUI, Formik/Yup, and Sass.
- Build/dev: `npm run dev` (vite), `npm run build` runs `tsc -b && vite build`. See [package.json](package.json).

Big picture

- Frontend-only app served by Vite. API calls target a backend at `http://localhost:8000/api` (see [src/api/api.ts](src/api/api.ts)).
- State: Redux Toolkit store in [src/redux/index.ts](src/redux/index.ts) with RTK Query's `api` injected. Auth lives under [src/redux/authSlice](src/redux/authSlice).
- Routing: Routes defined in [src/routes/index.tsx](src/routes/index.tsx). Pages are lazily loaded (`React.lazy`) and protected routes use `PrivateRoutes`.

Key patterns & conventions

- RTK Query is the canonical API layer. `api` is created in [src/api/api.ts](src/api/api.ts) and endpoints are injected (example: [src/api/userApi.ts](src/api/userApi.ts)). Prefer `api.injectEndpoints` for feature APIs.
- Auth patterns: login flow updates `accessToken` and `userData` via `authSlice` reducers and uses RTK Query `onQueryStarted` to dispatch state transitions (see [src/api/userApi.ts](src/api/userApi.ts)).
- Store setup: include `api.reducer` under the `reducer` key and `api.middleware` in `middleware` (see [src/redux/index.ts](src/redux/index.ts)). In dev mode, a Redux logger is enabled via `import.meta.env.MODE`.
- Exports: many folders expose an `index.ts` to centralize exports (components, pages, and some wrappers). Follow existing index export patterns when adding new modules.
- UI: Uses MUI components and Emotion styled primitives. Forms use Formik + Yup for validation (see `pages/Login` for example).
- Styling: Sass is used for page-specific styles (e.g., `src/pages/Login/css/login.scss`). Keep global styles in `index.css` / `App.css`.

Files to check for examples

- Routing + lazy-loading + menu extraction: [src/routes/index.tsx](src/routes/index.tsx)
- API base + auth header handling: [src/api/api.ts](src/api/api.ts)
- User endpoints + RTK Query patterns: [src/api/userApi.ts](src/api/userApi.ts)
- Redux store wiring and dev middleware: [src/redux/index.ts](src/redux/index.ts)
- Auth slice reducers: [src/redux/authSlice/index.ts](src/redux/authSlice/index.ts)
- Layout and shared UI: [src/components/LayoutWrapper/LayoutWrapper.tsx](src/components/LayoutWrapper/LayoutWrapper.tsx)

Developer workflows (commands)

- Start dev server: `npm run dev` (fast refresh via Vite)
- Build (type-check + bundle): `npm run build` (runs `tsc -b && vite build`)
- Preview production build: `npm run preview` (vite preview)
- Lint: `npm run lint` (eslint)

Project-specific gotchas and notes

- API base URL is hard-coded to `http://localhost:8000/api` in `src/api/api.ts`; change it if backend runs elsewhere or wire it to environment variables prior to commits.
- RTK Query `prepareHeaders` reads the token from `RootState.authSlice.accessToken`. When changing auth state ensure updates flow through `authSlice` reducers.
- Routing uses custom `CustomRouteObject` shapes (name, isAdmin) and a helper to build menu items; prefer editing `src/routes/index.tsx` for adding pages and menu entries.
- TypeScript: project uses composite build (`tsc -b`) — adding new paths may require updating `tsconfig.*` files.

When editing or adding features

- Add RTK Query endpoints with `api.injectEndpoints` and export hooks (see `userApi.ts`).
- Add new pages under `src/pages/YourPage` and export via an index where appropriate. Use lazy imports in `src/routes/index.tsx`.
- If adding global state, add a slice in `src/redux/` and include it in the store reducer object.

If anything here is ambiguous or you'd like examples for a specific file change, tell me which file or feature and I'll update this doc with exact code snippets.
