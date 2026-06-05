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
        main: resolve(process.cwd(), "src/index.html"),
        "front-body": resolve(process.cwd(), "src/front-body.html"),
        "back-body": resolve(process.cwd(), "src/back-body.html"),
      },
    },
  },
});
