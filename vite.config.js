import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Real-Estate/', // This is CRUCIAL for GitHub Pages!
  plugins: [react()],
});
