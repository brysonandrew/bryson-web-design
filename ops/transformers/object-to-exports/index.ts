import { validateEntryPoint } from '@ops/validate/entry-point';
import { readFile, writeFile } from 'fs/promises';
const CAPITALIZED_VARIABLE_REGEXP = /\s*[A-Z]{2,}/; // start
const COPY_SIGN_SPACE_REGEXP = /(\s*\w):\s/; // start & middle
const BACKWARD_CURLY_BRACE_COMMA_SPACE = /\}(\,)/; // start & middle

//const PATH = 'lib/motion/config/generate.ts';
const WRITE_TO = 'lib/motion/config/constants/core.ts';
(async () => {
  try {
    const targetFilePath = await validateEntryPoint(
      'isFile'
    ); // check if last arg in command is is a directory
    console.log(targetFilePath);
    const targetFile = await readFile(targetFilePath, {
      encoding: 'utf-8',
    });
    const lines = targetFile.split('\n');
    console.log(`found ${lines.length} lines`);
    const vars = [];
    let accLine = '';
    let endLine = '';
    for (let line of lines) {
      const isCapitalizedVariable =
        CAPITALIZED_VARIABLE_REGEXP.test(line);
      const isCopySignSpace =
        COPY_SIGN_SPACE_REGEXP.test(line);
      const isBackwardCurlyBraceEnd =
        BACKWARD_CURLY_BRACE_COMMA_SPACE.test(line);
      if (isCopySignSpace) {
        if (isCapitalizedVariable) {
          if (endLine) {
            endLine = endLine.replace(',', ';');
            endLine = endLine.trim();
            endLine = `${endLine}\n`;
            accLine += endLine;
            endLine = '';
          }

          line = line.replace(
            COPY_SIGN_SPACE_REGEXP,
            '$1 = '
          );
          line = line.trim();
          line = `${line}\n`;
          line = line.replace(',\n', ';\n');

          console.log('start found: ', line);
          if (accLine) {
            vars.push(accLine);
            accLine = '';
          }
          accLine += `export const ${line}`;
        } else {
          if (endLine) {
            endLine = `${endLine}\n`;
            accLine += endLine;
            endLine = '';
          }

          line = `${line}\n`;
          console.log('middle found: ', line);
          accLine += line;
        }
        continue;
      }

      if (isBackwardCurlyBraceEnd) {
        if (endLine) {
          endLine = `${endLine}\n`;
          accLine += endLine;
          endLine = '';
        }
        console.log('end found: ', line);
        endLine += line;
        continue;
      }

      if (endLine) {
        endLine = endLine.replace(',', ';');
        endLine = `${endLine}\n`;
        accLine += endLine;
        endLine = '';
      }
    }
    const nextFile = vars.join('\n');
    console.log(nextFile);

    await writeFile(WRITE_TO, nextFile);
  } catch (error) {
    console.error(error);
  }
})();
