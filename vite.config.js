import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
const jsxRuntime = fileURLToPath(
  new URL("./src/jsx-runtime.js", import.meta.url),
);
export default defineConfig({
  resolve: {
    alias: {
      "react/jsx-runtime": jsxRuntime,
      "react/jsx-dev-runtime": jsxRuntime,
    },
  },
});
