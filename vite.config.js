import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset paths allow deployment to GitHub Pages project URLs.
  base: './',
  plugins: [react()],
})
