import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import windiCss from "vite-plugin-windicss";
import viteRestart from "vite-plugin-restart";

export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [
    windiCss(),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    paths(),
    viteRestart({
      restart: "windi.config-*",
    }),
  ],
  server: {
    port: 3000,
  },
  publicDir: "assets",
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
