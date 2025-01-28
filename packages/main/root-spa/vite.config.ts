import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig({
  plugins: [vitePluginSingleSpa({ type: "root", imo: "5.1.0" })],
});
