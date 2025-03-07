import { writeFileSync } from "fs";
import { readFile } from "./files";

(async () => {
  const path = "generate-mocks/constants.ts";
  let page = readFile(path);
  page = page.replace(/ {2}"[^"]+/g, (value) => `  ${value.slice(3)} = ${value.slice(2)}`);
  writeFileSync(path, page);
})();
