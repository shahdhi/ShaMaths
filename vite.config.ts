import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // ✅ ensures Vite copies _redirects and other static files
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
