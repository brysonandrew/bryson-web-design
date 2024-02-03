import { green, red } from '@ops/console/styles';
import { NoParamCallback } from 'node:fs';

export const writeCallback =
  (key: string, path: string): NoParamCallback =>
  (p) => {
    if (p === null) {
      return console.log(
        green(`Wrote ${key} file to: ${path}`),
      );
    }
    console.error(
      red(
        `Something went wrong writing ${key} file to: ${path}`,
      ),
    );
  };
