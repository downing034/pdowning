import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      images: path.resolve(__dirname, 'src/images'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      styles: path.resolve(__dirname, 'src/styles'),
      files: path.resolve(__dirname, 'src/files'),
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
