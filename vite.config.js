import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tailwindcss(),
    react()],
  base: '/Real-Estate/', // Keep this for GitHub Pages
});

