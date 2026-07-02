/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // @vitejs/plugin-react-swcでもOK

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // 代わりにhappy-domをインストールして使うことも可能
    globals: true,
    setupFiles: "./vitest.setup.ts"
  }
})
