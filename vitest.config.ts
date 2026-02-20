import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/setup.ts'],
      include: ['test/**/*.test.{ts,tsx}'],
      exclude: ['test/legacy/**', 'node_modules/**'],
      coverage: {
        provider: 'v8',
        reportsDirectory: 'test/coverage',
        reporter: ['text', 'lcov'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/vite-env.d.ts',
          'src/constants/**',
          'src/images/**',
          'src/**/index.{ts,tsx}',
          'src/index.tsx',
          'src/index.d.ts',
          'src/components/abilities/SkillBubbles.tsx',
        ],
      },
    },
  }),
);
