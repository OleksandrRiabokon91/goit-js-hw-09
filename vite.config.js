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
    base: '/goit-js-hw-09/', // Добавь этот параметр
  };
});
