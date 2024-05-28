import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react({
        include: /\.(jsx|tsx)$/,
        babel: {
          plugins: ['styled-components'],
          babelrc: false,
          configFile: false,
        },
      }),
      macrosPlugin(),
    ],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3002',
          changeOrigin: true,
        },
      },
    },
  };
});
