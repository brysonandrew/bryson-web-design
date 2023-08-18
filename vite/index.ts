import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import unoCss from 'unocss/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { VitePWA } from 'vite-plugin-pwa';

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
    VitePWA(),
  ],
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
