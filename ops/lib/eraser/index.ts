import { inverse, green, red } from '@ops/lib/eraser';
import { deleteEntries } from '@ops/lib/eraser';
import glob from 'fast-glob';

const TASK_TITLE = 'Clean task';

const PATTERNS = [
  'package-lock.json',
  'yarn.lock',
  'node_modules',
  'dist',
];

async function* fire(): AsyncGenerator<any> {
  let i = 0;
  while (true) {
    if (PATTERNS[i]) {
      const files = await glob(PATTERNS[i], {
        onlyFiles: false,
        dot: true,
      });
      yield files;
      i++;
    } else {
      return;
    }
  }
}
const cleanGenerator = fire();

export const eraser = async () => {
  const run = async () => {
    const next: IteratorResult<string[], void> =
      (await cleanGenerator.next()) ?? null;
    if (!next) {
      const errorMessage = `${TASK_TITLE} failed`;
      console.log(red(errorMessage));
      cleanGenerator.throw(errorMessage);
    }
    if (next.done) {
      const doneMessage = `${TASK_TITLE} done`;
      console.log(green(doneMessage));
      cleanGenerator.return(doneMessage);
      process.exit();
    } else {
      console.log(inverse(`Using pattern: ${next.value}`));
      await deleteEntries(next.value ?? [], run);
    }
  };
  await run();
};

eraser();

export * from './display';
export * from './delete/entries';
export * from './delete/entry';