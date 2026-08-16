import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import env from "vite-plugin-env-compatible";
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react(),
    env({
      prefix: "VITE",
      mountedPath: "process.env",
    }),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src'),
    },
  },
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: "./vitest.setup.ts",
  //   alias: {
  //     '@/': path.resolve(__dirname, './src'),
  //   },
  // },
});