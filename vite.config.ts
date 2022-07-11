import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "add",
      fileName: (format) => `add.${format}.js`,
    },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
  },
});
