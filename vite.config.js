import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(), // Tailwind CSS support
    react(),       // React support
  ],
  base: '/Real-Estate/', // Required for GitHub Pages (matches repo name)
});