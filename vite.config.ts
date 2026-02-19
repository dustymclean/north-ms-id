import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: '/north-ms-id/', 
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      // Alias setup for cleaner imports
      '@': path.resolve(__dirname, '.'),
    },
  },
});