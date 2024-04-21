import { green } from '@brysonandrew/ops';
import { TWriteUpdate } from '@ops/exporter/config/types';
import { quoteWrap } from '@ops/templates';
export type TWuRecord = Record<string, TWriteUpdate>;
type TConfig = {
  m: string;
  path: string;
  file: string;
  prev: string;
  next: string;
  nextWriteUpdates: TWuRecord;
};
export const update = ({
  m,
  file,
  path: _path,
  prev,
  next,
  nextWriteUpdates: _nextWriteUpdates,
}: TConfig) => {
  const key = [_path, prev].join('|');
  const value = _nextWriteUpdates[key];
  if (value) {
    console.log('update not allowed on ', key);
    return {
      nextWriteUpdates: _nextWriteUpdates,
      nextFile: file,
    };
  }

  const nextFile = file.replace(prev, next);
  const fixMessage = `+ [${m}] Replacement of "${quoteWrap(
    prev
  )} with ${quoteWrap(next)}" added.`;
  const reason = `"${quoteWrap(prev)} ---> ${quoteWrap(
    next
  )}"`;
  console.log(green(fixMessage));
  const wu: TWriteUpdate = [_path, nextFile, reason];
  const nextWriteUpdates = {
    ..._nextWriteUpdates,
    [key]: wu,
  };

  return { nextWriteUpdates, nextFile };
};
