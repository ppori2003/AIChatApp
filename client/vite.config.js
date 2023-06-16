import react from '@vitejs/plugin-react';
import path from 'path';

import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}],
//   }, 
// }); 


