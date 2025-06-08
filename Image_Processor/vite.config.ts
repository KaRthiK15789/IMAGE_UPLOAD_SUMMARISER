import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  build: {
    rollupOptions: {
      external: [
        'fs',
        'path',
        'pdf-parse',
        'mammoth',
        'image-to-text'
      ],
    },
  },
});
