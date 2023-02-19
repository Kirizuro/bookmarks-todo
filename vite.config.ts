import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components/': new URL('./src/components/', import.meta.url).pathname,
      '@/': new URL('./src/', import.meta.url).pathname,
      // '~/comp': path.resolve(__dirname, './src/components/'),
      // '@/': path.resolve(__dirname, './src/'),
    },
  },
});
