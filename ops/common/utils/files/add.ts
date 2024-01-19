import { writeFile } from "fs/promises";
import { existsSync, writeFileSync } from "fs";
import { faint, green, red } from "../console";
import path from "path";

export const makeFile = (name: string, content: string) => {
  writeFileSync(name, content);
};

export const addFile = async (
  cwd: string,
  filePath: string,
  fileContent: string,
  isExistsCheck?: boolean
) => {
  const fullPath = path.join(cwd, filePath);
  try {
    if (isExistsCheck && existsSync(fullPath)) {
      console.log(faint(`× file ${filePath} already exists`));
    } else {
      await writeFile(fullPath, fileContent);
      console.log(green(`succeeded to add ${filePath}`));
    }
  } catch (error) {
    console.log(red("failed to add file "), error);
  }
};

export const addFiles = async (
  cwd: string,
  filePaths: [filePath: string, fileContent: string][],
  allDone: (() => void) | false
) => {
  for await (const [filePath, fileContent] of filePaths) {
    await addFile(cwd, filePath, fileContent);
  }
  if (allDone) {
    allDone();
  }
};
