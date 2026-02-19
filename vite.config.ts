import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/' because your custom domain (id.northmsnotary.com) serves from the root
  base: '/', 
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      // Standard alias for cleaner imports
      '@': path.resolve(__dirname, '.'),
    },
  },
});