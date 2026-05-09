import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false, // 暂时跳过，依赖用户自行配�?skipLibCheck
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@yaomingshan/core'],
});
