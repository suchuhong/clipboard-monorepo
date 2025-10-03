import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@such/react-clipboard-lite": path.resolve(
        __dirname,
        "../../packages/react-clipboard-lite/src/index.tsx"
      ),
    },
  },
});
