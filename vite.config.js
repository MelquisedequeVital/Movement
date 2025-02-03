import { defineConfig } from 'vite';

export default defineConfig({
  base: "/Movement",
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});