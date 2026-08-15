import { readFileSync, writeFileSync, rmSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = dirname(fileURLToPath(import.meta.url));

/**
 * Folds the built CSS and JS back into dist/index.html so the production
 * output is a self-contained page that opens by double-click, not only over
 * http://. Without this, `<script type="module">` is blocked by CORS on
 * file:// and the page renders blank.
 */
function inlineAssets(): Plugin {
  return {
    name: 'inline-assets',
    apply: 'build',
    closeBundle() {
      const dist = resolve(rootDir, 'dist');
      const htmlPath = resolve(dist, 'index.html');
      let html = readFileSync(htmlPath, 'utf8');
      const consumed: string[] = [];

      // Vite emits the entry as a deferred module in <head>. An inline classic
      // script would instead run at parse time, before #root exists, so the
      // bundle is lifted out and re-attached at the end of <body>.
      const scripts: string[] = [];
      html = html.replace(
        /<script\b[^>]*\bsrc="\.?\/?([^"]+\.js)"[^>]*><\/script>/g,
        (_match: string, src: string) => {
          consumed.push(src);
          scripts.push(readFileSync(resolve(dist, src), 'utf8'));
          return '';
        }
      );

      html = html.replace(
        /<link\b[^>]*\bhref="\.?\/?([^"]+\.css)"[^>]*>/g,
        (_match: string, href: string) => {
          consumed.push(href);
          return `<style>\n${readFileSync(resolve(dist, href), 'utf8')}\n</style>`;
        }
      );

      const inlined = scripts.map((code) => `<script>\n${code}\n</script>`).join('\n');
      html = html.replace('</body>', `${inlined}\n</body>`);

      writeFileSync(htmlPath, html);
      for (const file of consumed) rmSync(resolve(dist, file), { force: true });

      // Drop the assets folder once its contents have been folded in, but only
      // if nothing else (fonts, imported images) still lives there.
      const assetsDir = resolve(dist, 'assets');
      if (existsSync(assetsDir) && readdirSync(assetsDir).length === 0) {
        rmSync(assetsDir, { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineAssets()],
  // Relative base so the build works from a domain root, a repo subpath
  // (GitHub Pages project sites), and the local filesystem alike.
  base: './',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // A classic script rather than an ES module — modules are CORS-blocked
        // on file://, which is what made the built page blank when opened
        // directly.
        format: 'iife',
        inlineDynamicImports: true,
      },
    },
  },
});
