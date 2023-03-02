import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/index.ts'),
      '@types': path.resolve(__dirname, './src/types/index.ts'),
      '@service': path.resolve(__dirname, './src/service/index.ts'),
      '@router': path.resolve(__dirname, './src/router/index.ts'),
      '@context': path.resolve(__dirname, './src/context/index.ts'),
      '@pages': path.resolve(__dirname, './src/pages/index.ts'),
    },
  },
  plugins: [react()],
});
