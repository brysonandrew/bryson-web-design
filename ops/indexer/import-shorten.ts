import glob from "fast-glob";
import { readFileSync } from "fs";
import path from "path";
import type {
  TCompareSetValue,
  TFileComposer,
  TFileComposerSet,
  TImportsMap,
} from "../config/types/indexer";
import { addFiles } from "../utils/files/add";
import { resolveFull } from "../utils/files/resolve";
import {
  EXTRACT_IMPORT_NAMED_RX,
  FULL_IMPORT_PATH_RX,
  IMPORT_LINE_VALUE_RX,
  SHORT_IMPORT_PATH_RX,
} from "../utils/import-export";
import { DELIMITER, OP_IMPORT_SHORTEN_NAME } from "./constants";
import { entriesTempate, ETemplate } from "../utils/templates/entries";
import {  green } from "@ops/console";
import { addToMap } from "./processing";
import { cacheDirOps } from "@ops/utils";

const cwd = process.env.PROJECT_CWD;
if (!cwd) throw Error("No cwd");
const initDir = "ops/exporter";

() => {
  const fileComposer: TFileComposer<TFileComposerSet<TCompareSetValue>> = new Map<
    string,
    Set<TCompareSetValue>
  >();
  const valueImportsMap: TImportsMap = new Map<string, Set<string[]>>();
  const typeImportsMap: TImportsMap = new Map<string, Set<string[]>>();
  const filesToTraverse = glob.sync(`./${path.join(initDir, "**", `*{.ts,.tsx}`)}`, { cwd });
  filesToTraverse.forEach((file) => {
    const full = resolveFull(file);
    const content = readFileSync(full, { encoding: "utf-8" });

    let nextContent = content.replace(IMPORT_LINE_VALUE_RX, (importLine) => {
      const currentImportPath = (importLine.match(FULL_IMPORT_PATH_RX) || [null])[0];
      const key = (currentImportPath?.match(SHORT_IMPORT_PATH_RX) || [null])[0];
      const namedImportGroup = (importLine.match(EXTRACT_IMPORT_NAMED_RX) || [])[0];
      if (key && namedImportGroup) {
        const values = namedImportGroup.replace(/[\s{}]/g, "").split(",");
        if (values.length > 0) {
          addToMap<string[]>(
            importLine.includes("import type") ? typeImportsMap : valueImportsMap,
            key,
            values
          );
        }
        return "";
      } else {
        return importLine;
      }
    });

    const createValueImportLine = ([key, setter]: [string, Set<string[]>]) =>
      `import { ${[...setter.values()].join(DELIMITER)} } from "${key}";`;

    const createTypeImportLine = ([key, setter]: [string, Set<string[]>]) =>
      `import type { ${[...setter.values()].join(DELIMITER)} } from "${key}";`;

    const valueImports = [...valueImportsMap].map(createValueImportLine);
    const typeImports = [...typeImportsMap].map(createTypeImportLine);

    const allImports: string = [...valueImports, typeImports].join("\n");

    if (allImports.length > 0) {
      nextContent = `${allImports}\n${nextContent}`;

      addToMap(fileComposer, file, content);
      addToMap(fileComposer, file, nextContent);
    }
  });
  cacheDirOps(path.join(cwd, initDir), OP_IMPORT_SHORTEN_NAME);

  const files: [string, string][] = [...fileComposer.entries()].map(([filePath, setter]) => [
    filePath,
    ([...setter.values()] as string[])[1],
  ]);
  entriesTempate({
    cwd,
    type: ETemplate.Add,
    entries: files,
    treePromptConfig: {
      items: files.map(([filePath]) => filePath),
      highlights: [],
      prefix: green("+"),
    },
    operation: (allDone) => addFiles(cwd, files, allDone),
  });
};
