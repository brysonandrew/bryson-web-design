import { writeFile } from 'fs/promises';
import {
  TStrRows,
  TTarget,
  TTargets,
} from '@ops/exporter/config/types';
// import { kebabToTitle } from '@brysonandrew/utils-format';

export const writeExportsTarget = async (
  target: TTarget,
  targets: TTargets
) => {
  let indexRows: TStrRows = [];
  try {
    const {
      subWorkspaces,
      main,
      types,
      name,
      dir,
      pkgPath,
      version,
      pkg,
      peerDependencies,
      ...rest
    } = target;
    let exportRows = rest.exportRows;
    indexRows = [...indexRows, ...rest.indexRows];

    if (subWorkspaces.length > 0) {
      subWorkspaces.forEach((swsId) => {
        const sws = targets.find(
          (v) => v.pkgPath === swsId
        );
        if (typeof sws !== 'undefined' && sws.dir !== dir) {
          const dirToSws = `${sws.dir
            .replace(dir, '') 
            .slice(1)}/`;
          const replacer = (v: string) =>
            v.replaceAll('./', `./${dirToSws}`);

          const swsExports = sws.exportRows
            .filter((v) => !v.includes('"require": '))
            .map(replacer);
          const swsIndexRows = sws.indexRows.map(replacer);

          exportRows = [...exportRows, ...swsExports];
          indexRows = [...indexRows, ...swsIndexRows];
      
    
        }
      });
    }

    const pkgExportsStr = `{${exportRows.join(',')}}`;

    const exportsRecord = JSON.parse(pkgExportsStr);
    const exportsKeys = Object.keys(exportsRecord);
    const isExports = exportsKeys.length > 0;

    const pkgWithExportsRecord = {
      ...pkg,
      ...main,
      ...types,
      description: `${name} library`,
      version,
      peerDependencies,
      ...(isExports ? { exports: exportsRecord } : {}),
    };

    const pkgWithExportsStr = JSON.stringify(
      pkgWithExportsRecord,
      null,
      2
    );

    writeFile(pkgPath, pkgWithExportsStr);
  } catch (error) {
    console.error(error);
  } finally {
    return { indexRows };
  }
};
