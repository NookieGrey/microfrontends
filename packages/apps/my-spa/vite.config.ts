import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig({
  preview: {
    cors: true,
  },
  base: "http://localhost:8001",
  plugins: [
    react(),
    vitePluginSingleSpa({
      serverPort: 8001,
      spaEntryPoints: "src/spa.tsx",
      type: "mife",
      projectId: "my-spa",
      cssStrategy: "singleMife",
    }),
  ],
});
