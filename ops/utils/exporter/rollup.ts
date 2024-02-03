import type { RollupOptions } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import ts from "rollup-plugin-ts";
import type { TInput } from "../../config/types/z-exporter";

export const rollupConfig = ({ input, output }: TInput): RollupOptions => ({
  input,
  plugins: [nodeResolve(), commonjs(), ts({ tsconfig: { module: "none" } }), json()],
  external: ["react", "react-dom", "next", "styled-components"],
  output,
});
