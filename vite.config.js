import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),react()],
  
  base: '/Real-Estate/', // Keep this if deploying to GitHub Pages under that repo
});

