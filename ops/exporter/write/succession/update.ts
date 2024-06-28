import { green } from '@ops/lib';
import { TWriteUpdate } from '@ops/exporter/config/types';
export type TWuRecord = Record<string, TWriteUpdate>;
type TConfig = {
  mode: string;
  path: string;
  file: string;
  prev: string;
  next: string;
  nextWriteUpdates: TWuRecord;
};
export const update = ({
  mode,
  file,
  path: _path,
  prev: _prev,
  next: _next,
  nextWriteUpdates: _nextWriteUpdates,
}: TConfig) => {
  const prev = new RegExp(`(['"])${_prev}([/'"])`);

  const key = [_path, prev].join('|');
  const value = _nextWriteUpdates[key];
  if (value) {
    console.log('update not allowed on ', key);
    // return {
    //   nextWriteUpdates: _nextWriteUpdates,
    //   nextFile: file,
    // };
  }

  const RX = new RegExp(prev, 'g');
  if (!RX.test(file)) {
    console.log(mode, 'NOT FOUND');
  }
  const nextFile = file.replace(RX, `$1${_next}$2`);
  const reason = `${mode} - [${_prev}] with [${_next}]`;
  const fixMessage = `+ Replacement of ${reason} added.`;
  console.log(green(fixMessage));
  const wu: TWriteUpdate = [_path, nextFile, reason];
  const nextWriteUpdates = {
    ..._nextWriteUpdates,
    [key]: wu,
  };

  return { nextWriteUpdates, nextFile };
};
