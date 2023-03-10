import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: 'tests/unit/setupTests.ts',
    coverage: {
      exclude: ['tests/'],
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60,
    },
    deps: {
      inline: true,
    },
  },
});
