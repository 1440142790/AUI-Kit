import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@aui/core': resolve(__dirname, '../../packages/core/dist'),
    },
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
        fs: false,
      },
    }),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AuiVue',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', '@aui/core'],
      output: {
        preserveModules: false,
        globals: { vue: 'Vue' },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
