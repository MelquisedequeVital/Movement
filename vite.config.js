import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Movement",
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        frontBody: resolve(__dirname, "front-body.html"),
        backBody: resolve(__dirname, "back-body.html"),
      },
    },
  },
});
