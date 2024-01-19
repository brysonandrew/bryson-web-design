import type { TFileComposer, TFileComposerSet } from "../common/types/indexer";
import { bold, faint, inverse } from "../common/utils";
import { treeFormat } from "../common/utils/console/format";
import { treePromptExisting } from "./visualizer";

const mapFiles = (files: string[], fileComposer: TFileComposer) =>
  files.map((file: string) => {
    const setter = fileComposer.get(file) as Set<string> | undefined;
    if (setter) {
      return [bold(file), faint([...setter].join("\n      "))]
        .map((v, i, arr) => `${treeFormat(i, arr)} ${v}`)
        .join("\n    ");
    } else {
      return "";
    }
  });
const resolveContent = (
  replaceableFiles: string[],
  nonReplaceableFiles: string[],
  fileComposer: TFileComposer,
  cwd: string
) => {
  if ([...replaceableFiles, ...nonReplaceableFiles].length > 0) {
    const warnings: string[] = [];
    if (replaceableFiles.length > 0) {
      warnings.push(
        `These files will be overwritten:\n  ┌ ${cwd}\n  | \n  * \n${treePromptExisting(
          mapFiles(replaceableFiles, fileComposer)
        )}`
      );
    }
    if (nonReplaceableFiles.length > 0) {
      warnings.push(
        `⚠ It might be dangerous to overwrite these files:\n  ┌ ${cwd}\n  | \n  * \n${treePromptExisting(
          mapFiles(nonReplaceableFiles, fileComposer)
        )}`
      );
    }
    return warnings.join("\n");
  } else {
    return "Indexing this time will not overwrite any files.";
  }
};

export const yesNoConfig = (
  replaceableFiles: string[],
  nonReplaceableFiles: string[],
  fileComposer: TFileComposer,
  done: () => void,
  cwd: string
) => ({
  title: inverse(" Are you sure you would like to continue? "),
  content: resolveContent(replaceableFiles, nonReplaceableFiles, fileComposer, cwd),
  ifNo: () => {
    console.log(`\nIndexing operation cancelled\n`);
  },
  ifYes: () => {
    [...replaceableFiles, ...nonReplaceableFiles].map((file) => {
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
