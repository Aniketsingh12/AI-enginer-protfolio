import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base so the built `dist/` works from a repo subpath
  // (GitHub Pages project sites) as well as from a domain root.
  base: './',
});
