import { findPkgPaths } from './findPkgPaths';
import { resolveTargetDirPath } from './resolveTargetDirPath';
import { writePkgWorkspaces } from '@ops/exporter/writePkgWorkspaces';
import { writeTsPathWorkspacePaths } from '@ops/exporter/writeTsPathWorkspacePaths';
import { processTargets } from '@ops/exporter/processTargets';

(async () => {
  try {
    const targetDirPath = await resolveTargetDirPath();
    const record = await findPkgPaths(targetDirPath);
    const { targets, workspaces, tsPathRecord } = record;
    await writePkgWorkspaces(workspaces);
    await writeTsPathWorkspacePaths(tsPathRecord);
    processTargets(targets);
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  } 
})();
