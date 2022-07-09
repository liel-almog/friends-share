import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    modules: {
      generateScopedName: (name, filePath) => {
        const matches = path
          .basename(filePath)
          .match(/^([a-z-]+)(.module)?.s?css/);
        if (!matches) {
          throw new Error();
        }
        const baseFilename = matches[1];
        return `${baseFilename}-${name}`;
      },
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
