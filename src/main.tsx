import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ThemeProviderWrapper from "./theme/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: false
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </QueryClientProvider>
  </StrictMode>
);
