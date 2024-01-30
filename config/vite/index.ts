import { defineConfig, PluginOption } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import unoCss from 'unocss/vite';
import { compileTsServiceWorker } from './compile-ts-service-worker';

export default defineConfig({
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [
    unoCss({ inspector: true }),
    tsConfigPaths({
      loose: true,
    }),
    react(),
    compileTsServiceWorker() as PluginOption,
  ],
  resolve: {
    alias: {
      '@brysonandrew/color': 'lib/color',
    },
  },
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
