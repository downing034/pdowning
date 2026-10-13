import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(import.meta.dirname, 'src/components'),
      constants: path.resolve(import.meta.dirname, 'src/constants'),
      images: path.resolve(import.meta.dirname, 'src/images'),
      hooks: path.resolve(import.meta.dirname, 'src/hooks'),
      styles: path.resolve(import.meta.dirname, 'src/styles'),
      files: path.resolve(import.meta.dirname, 'src/files'),
    },
  },
  server: {
    port: 3001,
    open: true,
  },
  build: {
    outDir: 'build',
  },
});
