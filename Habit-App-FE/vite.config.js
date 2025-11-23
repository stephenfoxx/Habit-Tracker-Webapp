import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow all hosts
    allowedHosts: ["habit-tracker-webapp-12.onrender.com"],
  },
});
