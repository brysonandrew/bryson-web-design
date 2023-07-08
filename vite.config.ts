import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import unoCss from 'unocss/vite';

export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [
    tsConfigPaths(),
    unoCss({
      configFile: './uno.config.ts',
    }),
    react(),
  ],
  server: {
    port: 3000,
  },
  publicDir: "assets",
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
