import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
const queryClient = new QueryClient();
import { ClerkProvider } from "@clerk/clerk-react";
import "./i18n.js"
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </QueryClientProvider>
);
