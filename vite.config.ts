import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev runs at "/"; production build targets GitHub Pages subpath "/penny-finance/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/penny-finance/" : "/",
  plugins: [react()],
}));
