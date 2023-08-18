import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import unoCss from 'unocss/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { compileTsServiceWorker } from './vite.compile-ts-service-worker';

export default defineConfig({
  plugins: [
    compileTsServiceWorker(),
    nodePolyfills({
      globals: {
        Buffer: false,
        global: false,
        process: false,
      },
      protocolImports: false,
    }),
    tsConfigPaths(),
    react(),
    unoCss({ inspector: true }),
  ],
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
