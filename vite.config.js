import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Port number for your development server
  },
  build: {
    outDir: 'dist', // Directory where your build files will be placed
  },
});
