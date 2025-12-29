import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base path for GitHub Pages deployment
  base: './', 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  resolve: {
    alias: {
      // Ensure it looks for components in the root if they aren't in folders
      '@': '/',
    },
  },
});
