import { fileURLToPath, URL } from "url";
import eslintPlugin from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
