import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/main.ts", import.meta.url)),
      formats: ["es"],
      fileName: "main"
    },
    rollupOptions: {
      external: [
        "fs",
        "@actions/core",
        "node:path"
      ],
      output: {
        globals: {
          fs: "fs",
          "@actions/core": "@actions/core",
          "node:path": "node:path"
        }
      }
    }
  }
});
