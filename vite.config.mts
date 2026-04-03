import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoBase = "/snackbar/";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? repoBase : "/",
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "demo-dist",
    emptyOutDir: true,
  },
  preview: {
    open: true,
  },
}));