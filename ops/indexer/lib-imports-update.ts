import glob from "fast-glob";
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { bold, inverse, yesNo } from "@ops/console";
import { LIB_IMPORT_SOURCE_RX } from "../utils/import-export";
import { FROM_TO_DELIMITER } from "./constants";
import { resolveFull } from "@ops/utils";
const cwd = process.env.PROJECT_CWD;
if (!cwd) throw Error("No cwd");
const initDir = "main/store";

(() => {
  const updateMap: Map<string, string[]> = new Map();

  const filesToTraverse = glob.sync(`./${path.join(initDir, "**", `*{.ts,.tsx}`)}`, { cwd });
  filesToTraverse.forEach((file) => {
    const full = resolveFull(file);

    const content = readFileSync(full, { encoding: "utf-8" });

    const nextContent = content.replace(LIB_IMPORT_SOURCE_RX, (source) => {
      const tail = source.replace(/.*?\/lib\//, "");
      const nextSource = `@juke/${tail.split(/\//).join("-")}`;
      const prevValues = updateMap.get(full) || [];
      const nextValue = [source, nextSource].join(FROM_TO_DELIMITER);
      updateMap.set(full, [...prevValues, nextValue]);
      return nextSource;
    });

    const updates = updateMap.get(full);
    if (updates) {
      updates.unshift(nextContent);
    }
  });

  yesNo({
    title: inverse("Update the following?"),
    content: [...updateMap.entries()]
      .map(([path, updates]) => `${bold(path)}\n\n${updates.slice(1, updates.length).join("\n")}\n`)
      .join("\n"),
    ifNo: () => {
      console.log(`\nImport update cancelled\n`);
    },
    ifYes: () => {
      console.log(`\nUpdating entries...\n`);

      const allDone = () => {
        console.log(`\nUpdate complete\n`);
      };

      for (const [path, values] of updateMap.entries()) {
        const [nextContent, ...updates] = values;
        console.log(`Updating... ${updates.join("/n")}`);
        writeFileSync(path, nextContent);
      }
      allDone();
    },
  });
})();
