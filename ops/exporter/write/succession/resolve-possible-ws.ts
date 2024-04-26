import { TTargets } from '@ops/exporter/config/types';
import {
  TWuRecord,
  update,
} from '@ops/exporter/write/succession/update';

type TConfig = {
  lib: string;
  targets: TTargets;
  filePath: string;
  possibleSubWs: string;
  subWsName: string;
  appName: string;
  wsName: string;
};
export const resolvePossibleWs = ({
  lib,
  targets,
  filePath,
  possibleSubWs,
  subWsName,
  appName,
  wsName: _wsName,
}: TConfig) => {
  // let nextWriteUpdates: TWuRecord = {};

  console.log(
    possibleSubWs,
    'possibleSubWs',
    targets.some((target) => target.name === possibleSubWs)
  );
  if (
    targets.some((target) => target.name === possibleSubWs)
  ) {
    lib = lib.replace(
      /[;'"]/g,
      ''
    );
    const prevLib = lib;//[lib, subWsName].join('/');
    lib = [appName, possibleSubWs].join('/');
    lib = lib.replace(
      /[;'"]/g,
      ''
    );
    // const nextFile = file.replace(prevLib, lib);
    // writeUpdates.push([filePath, nextFile]);
    // const fixMessage = `+ [1] Replacement of "${quoteWrap(
    //   prevLib
    // )} with ${quoteWrap(lib)}"`;
    // console.log(prevLib, lib);
    return { path: filePath, prev: prevLib, next: lib };
  }

  // return { file, nextWriteUpdates, wsName: _wsName };
};
