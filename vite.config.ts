import { copyFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves unknown paths from 404.html, so it gets the built app shell
function githubPages404Fallback(): Plugin {
  return {
    name: 'github-pages-404-fallback',
    apply: 'build',
    closeBundle() {
      const outDir = fileURLToPath(new URL('./dist', import.meta.url));
      copyFileSync(`${outDir}/index.html`, `${outDir}/404.html`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), githubPages404Fallback()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
