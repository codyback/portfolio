import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

import { defineConfig } from 'vitest/config'


export default defineConfig({
	plugins: [sveltekit()],
	resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		globals: true,
		setupFiles: 'tests/unit/setupTests.ts',
		coverage: {
      exclude: ['tests/']
    },
		deps: {
			inline: true
		},
		// alias: {
		// 	$app: path.resolve(__dirname, 'tests/unit/__mocks__/app/')
		// },
	}
});
