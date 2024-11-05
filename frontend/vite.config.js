import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://filmfy-0xe1.onrender.com",
      "/uploads/": "https://filmfy-0xe1.onrender.com",
    },
  },
});
