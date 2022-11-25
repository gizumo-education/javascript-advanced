import { resolve } from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default (() => {
  const lessonName = process.env.LESSON_NAME;
  const devServerPath = lessonName === 'dom' ? 'lesson/domOperation' : lessonName;

  return defineConfig({
    build: {
      rollupOptions: {
        input: {
          'lesson/domOperation': resolve(__dirname, 'src/lesson/domOperation/index.html'),
          practice: resolve(__dirname, 'src/practice/index.html'),
        },
        outDir: 'dist/',
        output: {
          entryFileNames: 'src/[name]/index.js',
          assetFileNames: assetInfo => assetInfo.name,
        }
      },
      polyfillModulePreload: false,
      emptyOutDir: true,
    },
    plugins: [
      legacy({
        targets: ['ie >= 11'],
      }),
    ],
    server: {
      open: `/src/${devServerPath}/index.html`,
      port: 8000,
    },
  });
});