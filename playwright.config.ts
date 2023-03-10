import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173,
  },
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4173/',
  },
  reporter: process.env.CI ? 'github' : [['html'], ['list']],
  testDir: 'tests/e2e/specs',
};

export default config;
