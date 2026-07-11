/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import env from "vite-plugin-env-compatible";
import path from 'path';

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react(),
    env({ prefix: "VITE", mountedPath: "process.env" })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
