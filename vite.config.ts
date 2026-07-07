import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Domena własna contractusco.pl (GitHub Pages) -> serwowane z korzenia
  base: "/",
  plugins: [react()],
  server: { port: 5173, host: true },
});
