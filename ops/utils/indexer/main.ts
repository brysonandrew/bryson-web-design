import { existsSync, readFileSync, readdirSync, statSync } from "fs";
import glob from "fast-glob";
import path from "path";
import { matchAlls } from "../iterators";
import type {
  TAddToSetterConfig,
  TConfig,
  TExistingFilesCheckConfig,
  TFileComposer,
  TFileComposerConfig,
  TFileComposerEntry,
  TFileComposerSet,
} from "../../config/types/indexer";
import { ensureDir } from "fs-extra";
import { bold, faint, green, inverse, underline } from "@ops/console";
import { yesNo } from "@ops/console/interactive";
import { writeFile } from "fs/promises";
import { INDEX_BASENAME, OP_INDEXER_NAME, DELIMITER, FROM_TO_DELIMITER } from "./constants";
import { treeFormat } from "@ops/console/format";
import { resolveFull } from "../files/resolve";
import { treePromptExisting } from "@ops/indexer";
const POSSIBLE_INDEX_FILES = ["index.ts", "index.tsx"];
const cwd = process.env.PROJECT_CWD || "";

const ALIAS_LOOKUP: Record<string, string> = {
  fileComposerGraphql: "graphql",
  fileComposerTypescript: "typescript",
};

if (!cwd) throw Error("cwd not defined");

export const addToMap = <GSetValue = string>(
  map: Map<string, Set<GSetValue>>,
  key: string,
  data: GSetValue
) => {
  const setter = map.get(key) || new Set<GSetValue>();
  setter.add(data);
  map.set(key, setter);
};

export const resolveExportsMap = ({
  initDir = "",
  excludeIndexingDirs,
  excludeIndexingDirsWithFiles,
  exportRx,
  exportExtGlob,
  transformMatch,
  maxDepth,
}: TConfig) => {
  const fullFilePath = path.resolve(cwd, initDir);

  if (!existsSync(fullFilePath)) {
    console.error(JSON.stringify(fullFilePath));
    throw Error("provided path does not exist");
  }

  if (!statSync(fullFilePath)) {
    console.error(JSON.stringify(fullFilePath));
    throw Error("provided path exists but is not a directory");
  }

  const pathFromCwd = initDir.replace(cwd, "");

  console.log(
    [
      "Finding export in:",
      `Current work directory ${underline(cwd)}`,
      `Starting from relative ${underline(pathFromCwd)}`,
      `Starting from absolute ${underline(fullFilePath)}`,
    ].join("\n")
  );

  const files = glob.sync(path.join(".", pathFromCwd, "**", `*${exportExtGlob}`), {
    cwd,
    ignore: ["**/package.json", "**/tsconfig.json", "**/*.d.ts"],
  });
  const exportsMap = new Map<string, Set<string>>();
  for (const file of files) {
    const resolveExports = (name: string) => {
      const leadingPathParts = file.replace(path.resolve(pathFromCwd, ".."), "/").split("/");
      const depth = leadingPathParts.length;
      let pathMissed = "";
      while (leadingPathParts.length > -1) {
        const pathFull = leadingPathParts.join("/");
        if (!pathFull) break;

        if (!(excludeIndexingDirs || []).includes(path.dirname(pathFull))) {
          const indexFileDir = path.join(pathFull, "..");
          const indexFilePath = path.join(indexFileDir, INDEX_BASENAME);
          const indexSourceEntries = readdirSync(path.resolve(cwd, indexFileDir), {
            encoding: "utf-8",
          });
          const indexSource = path.basename(pathFull).replace(/.ts(x?)$/, "");

          if (
            indexSourceEntries.every((entry) => !excludeIndexingDirsWithFiles?.includes(entry)) ||
            (typeof maxDepth !== "undefined" &&
              (maxDepth < 0
                ? leadingPathParts.length < Math.abs(maxDepth)
                : leadingPathParts.length <= maxDepth))
          ) {
            const key = `${path.join(indexSource, pathMissed)}${FROM_TO_DELIMITER}${indexFilePath}`;
            if (leadingPathParts.length < depth && !pathMissed) {
              name = name.replace(/^default /, "named ");
            }
            addToMap(exportsMap, key, name);
            pathMissed = "";
          } else if (!POSSIBLE_INDEX_FILES.includes(indexSource)) {
            pathMissed = path.join(indexSource, pathMissed);
          }
        }
        leadingPathParts.pop();
      }
    };
    if (path.extname(file) === ".json") {
      const name = file.replace(cwd, "").replace(/[./-]./g, (v) => v[1].toUpperCase());
      resolveExports(`default ${name}`);
    } else {
      const fullFilePath = path.resolve(cwd, file);
      const currFile = readFileSync(fullFilePath, { encoding: "utf-8" });
      const names = matchAlls(currFile, exportRx)
        .map((match) => (match ? (transformMatch ? transformMatch(match) : match) : null))
        .filter(Boolean);
      if (names.length === 0) continue;
      (names as string[]).forEach(resolveExports);
    }
  }
  return exportsMap;
};

export const resolveFileComposer = ({
  exportsMap,
  addToSetter,
}: TFileComposerConfig): TFileComposer => {
  const fileComposer = new Map<string, Set<string>>();
  for (const [key, dirExports] of exportsMap.entries()) {
    const [source, indexFilePath] = key.split(FROM_TO_DELIMITER);
    const list = [...dirExports.values()];
    const setter = fileComposer.get(indexFilePath) || new Set();
    addToSetter({ setter, list, source });
    fileComposer.set(indexFilePath, setter);
  }
  return fileComposer;
};

export const addToSetter = ({ setter, list, source }: TAddToSetterConfig) => {
  source = [".ts", ".tsx"].includes(source) ? path.parse(source).name : source;
  const types: string[] = [];
  const namedValues: string[] = [];
  const defaultValues: string[] = [];

  list.forEach((item) => {
    if (/^named /.test(item)) {
      item = item.replace(/^named /, "");
      const alias = ALIAS_LOOKUP[item]; // very restrictive allowance for aliases
      if (alias && ALIAS_LOOKUP[item] === source) {
        item = `${item} as ${alias}`;
      } else if (alias) {
        item = alias;
      }
      namedValues.push(item);
    }
    if (/^enum /.test(item)) {
      item = item.replace(/^enum /, "");
      namedValues.push(item);
    }
    if (/^type /.test(item)) {
      item = item.replace(/^type /, "");
      types.push(item);
    }
    if (/^default /.test(item)) {
      item = item.replace(/^default /, "");
      defaultValues.push(item);
    }
  });

  if (types.length > 0) {
    setter.add(`export type { ${types.join(DELIMITER)} } from "./${source}";`);
  }
  if (namedValues.length > 0) {
    setter.add(`export { ${namedValues.join(DELIMITER)} } from "./${source}";`);
  }
  if (defaultValues.length > 0) {
    const exportValues: string[] = [];
    defaultValues.forEach((value) => {
      setter.add(`import ${value} from "./${source}";`);
      exportValues.push(value);
    });
    setter.add(`export { ${exportValues.join(DELIMITER)} };`);
  }
};

export const existingFilesCheck = ({ fileComposer, done }: TExistingFilesCheckConfig) => {
  const existingFiles: string[] = [];
  for (const [file] of fileComposer.entries()) {
    if (existsSync(resolveFull(file))) {
      existingFiles.push(file);
    }
  }

  yesNo({
    title: inverse(" Are you sure you would like to continue? "),
    content: `These files will be overwritten:\n  ┌ ${cwd}\n  | \n  * \n${treePromptExisting(
      existingFiles.map((file) => {
        const setter = fileComposer.get(file) as Set<string> | undefined;
        if (setter) {
          return [bold(file), faint([...setter].join("\n      "))]
            .map((v, i, arr) => `${treeFormat(i, arr)} ${v}`)
            .join("\n    ");
        } else {
          return "";
        }
      })
    )}`,
    ifNo: () => {
      console.log(`\nIndexing operation cancelled\n`);
    },
    ifYes: () => {
      existingFiles.map((file) => {
        const setter: TFileComposerSet | undefined = fileComposer.get(file);
        if (setter) {
          return [bold(file), faint([...setter].join("\n      "))]
            .map((v, i, arr) => `${treeFormat(i, arr)} ${v}`)
            .join("\n    ");
        } else {
          return "";
        }
      });
      done();
    },
  });
};

export const createIndices = async (fileComposer: TFileComposer) => {
  console.log(`\n...${OP_INDEXER_NAME} files...\n`);
  for await (const [filePath, setter] of fileComposer.entries()) {
    const fullFile = resolveFull(filePath);
    await ensureDir(path.dirname(fullFile));
    const content = [...setter.values()].join("\n");
    await writeFile(fullFile, content);
    console.log(green(` + File added at ${filePath}`));
  }
  console.log(`\n✓ ${OP_INDEXER_NAME} complete\n`);
};

export const sortEntries = (fileComposerEntries: TFileComposerEntry[]) =>
  fileComposerEntries.sort((a: TFileComposerEntry, b: TFileComposerEntry) => {
    const keyA = a[0];
    const keyB = b[0];

    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return -1;
    }
    return 0;
  });

export const sortEntriesByLength = (fileComposerEntries: TFileComposerEntry[]) =>
  fileComposerEntries.sort((a: TFileComposerEntry, b: TFileComposerEntry) => {
    const keyA = a[0].length;
    const keyB = b[0].length;

    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return -1;
    }
    return 0;
  });
