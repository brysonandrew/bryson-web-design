import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import windiCss from "vite-plugin-windicss";

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
  ],
  server: {
    port: 3000,
  },
  publicDir: "assets",
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
