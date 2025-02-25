import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import plugin from 'eslint-plugin-react'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {port:5173},
})
