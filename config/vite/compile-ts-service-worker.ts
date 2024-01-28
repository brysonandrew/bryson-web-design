import {
  rollup,
  InputOptions,
  OutputOptions,
  RollupOptions,
  OutputBundle,
} from 'rollup';
import rollupPluginTypescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import rollupPluginJson from '@rollup/plugin-json';

export const compileTsServiceWorker = (
  input = 'node_modules/@brysonandrew/service-worker/main.ts',
) => ({
  name: 'compile-typescript-service-worker',
  async writeBundle(
    _options: RollupOptions,
    _outputBundle: OutputBundle,
  ) {
    const inputOptions: InputOptions = {
      input,
      plugins: [
        rollupPluginTypescript(),
        rollupPluginJson(),
        nodeResolve(),
      ],
    };
    const outputOptions: OutputOptions = {
      file: 'assets/service-worker.js',
      format: 'es',
    };
    const bundle = await rollup(inputOptions);
    await bundle.write(outputOptions);
    await bundle.close();
  },
});
