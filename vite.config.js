import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: 'src',
  base: "/Movement",
  server: {
    port: 3000,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        frontBody: resolve(process.cwd(), "front-body.html"),
        backBody: resolve(process.cwd(), "back-body.html"),
      },
    },
  },
});
