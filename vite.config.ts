/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import env from "vite-plugin-env-compatible";

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react(),
    env({ prefix: "VITE", mountedPath: "process.env" })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts"
  }
})
