import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',       // '/' because app is at root of domain
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
});
