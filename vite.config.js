import { resolve } from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default (() => {
  const lessonName = process.env.LESSON_NAME;
  const devServerPath = lessonName === 'dom' ? 'lesson/domOperation' : lessonName;

  return defineConfig({
    root: 'src',
    build: {
      rollupOptions: {
        input: {
          dom: resolve(__dirname, 'src/lesson/domOperation/index.html'),
          practice: resolve(__dirname, 'src/practice/index.html'),
        },
        output: {
          assetFileNames: '[name]/[ext]/[name].[ext]',
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
      open: `/${devServerPath}/index.html`,
      port: 8000,
    },
  });
});