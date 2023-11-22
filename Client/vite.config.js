import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/MyWeb/",
  plugins: [react()],
  build: {
    rollupOptions: {},
  },
  optimizeDeps: {
    include: ["tsparticles"],
  },
});
