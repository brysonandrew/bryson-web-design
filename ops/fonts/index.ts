import { inverse, red } from '@ops/console';
import { createBunnyFontFiles } from '@ops/fonts/bunny';
import { createFontshareFiles } from '@ops/fonts/fontshare';
import { createGoogleFontFiles } from '@ops/fonts/google';
import { parse } from 'path';
const { name } = parse(__dirname);
const args = process.argv;
const lastArg = args[args.length - 1];
console.log(inverse(`${name}`));

const resolve = (key: string) => {
  switch (key) {
    case 'g': {
      createGoogleFontFiles();
      break;
    }
    case 'f': {
      createFontshareFiles();
      break;
    }
    case 'b': {
      createBunnyFontFiles();
      break;
    }
    default:
      console.log(red(`invalid arg ${key}`));
  }
};

resolve(lastArg);
