import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import unoCss from 'unocss/vite';

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
    react(),
    unoCss(
      // { inspector: true }
    ),
    tsConfigPaths(
      // {loose: true}
    ),
    // compileTsServiceWorker() as PluginOption,
  ],
  server: {
    port: 3000,
  },
  publicDir: 'assets',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
