import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/davecook88/" : "/",
  build: {
    outDir: "./docs",
    emptyOutDir: true,
  },
  plugins: [preact(), tailwindcss(), tsconfigPaths()],
}));
