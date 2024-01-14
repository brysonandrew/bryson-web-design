import glob from "fast-glob";
import {  green, inverse, red } from "../console";
import { deleteEntries } from "./delete";

const PATTERNS = [
  "yarn.lock",
  "node_modules",
];

async function* clean(): AsyncGenerator<any> {
  let i = 0;
  while (true) {
    if (PATTERNS[i]) {
      console.log(PATTERNS[i]);
      const files = await glob(PATTERNS[i], { onlyFiles: false, dot: true });
      yield files;
      i++;
    } else {
      return;
    }
  }
}
const cleanGenerator = clean();

(async () => {
  const handleEnd = async () => {
    const next: IteratorResult<string[], void> = (await cleanGenerator.next()) ?? null;
    if (!next) {
      console.log(red("Clean task failed"));
      cleanGenerator.throw("Clean task failed");
    }
    if (next.done) {
      console.log(green("Clean task done"));
      cleanGenerator.return("Clean task complete");
      process.exit();
    } else {
      console.log(inverse(`Using pattern: ${next.value}`));
      await deleteEntries(next.value ?? [], handleEnd);
    }
  };
  await handleEnd();
})();
