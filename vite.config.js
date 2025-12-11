import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',        // The frontend folder is the working directory in GitHub Actions
  build: {
    outDir: 'build', // Output folder for production build (frontend/build)
  },
  server: {
    port: 3000       // Local dev server port
  }
});
