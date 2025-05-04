import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
import { glob } from 'glob';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [FullReload(['./src/*.html']), SortCss({ sort: 'mobile-first' })],
  };
});
