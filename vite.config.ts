import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Repozytorium: zovupl/Contractus -> strona pod /Contractus/
  base: "/Contractus/",
  plugins: [react()],
  server: { port: 5173, host: true },
});
