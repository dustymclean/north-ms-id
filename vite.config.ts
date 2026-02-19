import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all envs regardless of the `VITE_` prefix.
    const env = loadEnv(mode, '.', '');
    
    return {
      // The base should match your GitHub repository name
      base: '/north-ms-id/', 
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // This injects the environment variables into your client-side code
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Allows you to use '@/' as a shorthand for the root directory
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});