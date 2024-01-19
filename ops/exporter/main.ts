import { find } from './find';
import { init } from './init';
import { clean } from './clean';
import { cache } from './cache';
import { foundation } from './foundation';
import { build } from './build';
import { readFile } from '@ops/common/utils';
import { writeFile } from 'fs';

(async () => {
  try {
    const workspacePath = init();
    const targets = find(workspacePath);
    // clean(targets);
    cache(targets);
    for (const { full } of Object.values(targets)) {
      const f = readFile(`${full}/index.ts`);
      const rx1 = new RegExp('[;"]', 'gi');
      const f1 = f.replace(rx1, '');
      const rx2 = new RegExp('export.*from', 'gi');
      console.log(f, f1);
      const pathsOnly = f1.replace(rx2, '');
      //   const [_, index, str] = a;
      //   // console.log(index, str);
      //   const tail = str.slice(-index);
      //   console.log(tail);
      //   const indexNl = tail.indexOf('\n');
      //   const c = tail.slice(0, indexNl);
      //   console.log(c);
      //   return `${indexNl}: ${indexNl}.ts`;
      // });
      const rows = pathsOnly
        .split('\n')
        .filter(Boolean)
        .map((v) => v.trim());
      let next = '{\n';
      for (const row of rows) {
        next += `"${row}": "${row}.ts",\n`;
      }
      console.log(next);
      writeFile(
        `${full}/obj.ts`,
        `${next}}`,
        console.log,
      );
    }

    // const inputs = foundation(targets, workspacePath);
    // if (inputs) {
    //   await build(inputs);
    // }
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  }
})();
