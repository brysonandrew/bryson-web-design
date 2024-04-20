import { validateEntryPoint } from './validate/entry-point';
import { readPackagePaths } from './read/package/paths';
import { writeWorkspacesPkg } from '@ops/exporter/write/workspaces/pkg';
import { writeWorkspacesTsPaths } from '@ops/exporter/write/workspaces/ts-paths';
import { transformPkgPaths } from '@ops/exporter/transform/pkg-paths';
import { writeIndiciesTargets } from '@ops/exporter/write/indicies/targets';
import { writeExportsTargets } from '@ops/exporter/write/exports/targets';
import { readSubWorkspacesTargets } from '@ops/exporter/read/sub-workspaces/targets';
import { readPackageTargets } from '@ops/exporter/read/package/targets';
import { readAllTargets } from '@ops/exporter/read/all/targets';
import { writeUpdates } from '@ops/exporter/write/updates';

(async () => {
  try {
    const targetDirPath = await validateEntryPoint(); // check if last arg in command is is a directory

    // READ

    const paths = await readPackagePaths(targetDirPath); // glob package.json for tree
    const record = transformPkgPaths(paths); // transform package paths into record with targets, workspaces and ts-paths record
    const { workspaces, tsPathsRecord, targets } = record;

    let accTargets = [...targets];

    accTargets = await readPackageTargets(accTargets); // pkg without deps, pkg path and version and bump version minor by 1
    accTargets = await readSubWorkspacesTargets(accTargets); // iterate over sub workspaces to use them as index rows and peer deps
    accTargets = await readAllTargets(accTargets);
    //  console.log(accTargets.map((t) => t.exportRows));
    // iterate over targets and build lib exports
    // console.log(
    //   accTargets.filter(
    //     (v) =>
    //       v.peerDependencies['@brysonandrew/motion-core']
    //   ).map(v=>v.name)
    // );
    // return;
    // WRITE

    // write workspaces
    await writeWorkspacesPkg(workspaces); // to root package.json
    await writeWorkspacesTsPaths(tsPathsRecord); // to ts-paths

    await writeUpdates(accTargets);
    accTargets = await writeExportsTargets(accTargets); // index rows and peer deps from workspaces
    writeIndiciesTargets(accTargets);
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  }
})();
