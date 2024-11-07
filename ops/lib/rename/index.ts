import glob from 'fast-glob';
import { inverse, green, red } from './display';
import { renameEntries } from './entries';

const TASK_TITLE = 'Rename task';
const PATTERNS = ['src/**/*.tsx'];

async function* fire(): AsyncGenerator<any> {
  let i = 0;
  while (true) {
    if (PATTERNS[i]) {
      const filePaths = await glob(PATTERNS[i], {
        onlyFiles: false,
        dot: true,
        ignore: ['node_modules'],
      });
      yield filePaths;
      i++;
    } else {
      return;
    }
  }
}

const cleanGenerator = fire();

export const go = async () => {
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
      console.log(next);

      await renameEntries(next.value ?? [], run);
      run();
    }
  };
  await run();
};
go();
