import { defineConfig } from 'tsup';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['vue', '@aui/core'],
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.vue', 'src/**/*.ts'],
      exclude: ['src/**/*.d.ts'],
    }),
  ],
});
