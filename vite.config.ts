import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "node:path";

export default defineConfig({
  plugins: [
      react(), tailwindcss()
  ],
  css: {
    // força uso do pipeline postcss padrão e evita binário lightningcss
    transformer: 'postcss'
  },
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
