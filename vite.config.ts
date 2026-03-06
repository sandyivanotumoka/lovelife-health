// Konfigurasi Vite untuk project LoveLife Health
// Kita menambahkan plugin Tailwind agar CSS Tailwind bisa diproses oleh Vite

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
