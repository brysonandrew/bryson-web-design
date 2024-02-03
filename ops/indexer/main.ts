import type { TConfig, TExportsMap, TFileComposer } from "../config/types/indexer";
import { bold } from "@ops/console";
import {
  addToSetter,
  createIndices,
  existingFilesCheck,
  resolveExportsMap,
  resolveFileComposer,
} from "./processing";
import { visualizeFileComposer } from "./visualizer";
import { resolveCwd } from "../utils/global";
import type { TConfigMultiLookup } from "./configs";
import { configLookup } from "./configs";
const cwd = resolveCwd();
const INIT_DIR = `${cwd}/ops/generate-mocks`;

const resolveConfig = (initDir: string): TConfigMultiLookup => ({
  all: [configLookup(initDir).graphql, configLookup(initDir).ts],
});

const buildIndicies = (configs: TConfig[]) => {
  let exportsMap: TExportsMap = new Map<string, Set<string>>();
  configs.map((config) => {
    const nextMap = resolveExportsMap(config);
    exportsMap = new Map([...exportsMap, ...nextMap]);
  });
  const fileComposer: TFileComposer = resolveFileComposer({ exportsMap, addToSetter });
  const visual = visualizeFileComposer(fileComposer);
  console.log(visual);
  existingFilesCheck({ fileComposer, done: () => createIndices(fileComposer) });
};

(() => {
  const configs = resolveConfig(INIT_DIR)[process.argv[2]];
  if (configs) {
    buildIndicies(configs);
  } else {
    console.log(bold("Indexer: Please specify a valid config"));
  }
})();
