import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// tailwindcss configuration using below cmd
// npm install tailwindcss @tailwindcss/vite
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
