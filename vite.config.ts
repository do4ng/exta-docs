import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { exta } from "exta";

export default defineConfig({
  plugins: [react(), exta()],
});
