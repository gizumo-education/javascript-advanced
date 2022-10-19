import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  root: 'src/practice',
  build: {
    outDir: '/dist',
    emptyOutDir: true,
  },
  plugins: [
    legacy({
      targets: ['ie >= 11'],
    }),
  ],
  server: {
    open: true,
    port: 8000,
  },
});