import { findTargets } from './findTargets';
import { resolveTargetDirPath } from './resolveTargetDirPath';
import { writePkgWorkspaces } from '@ops/exporter/writePkgWorkspaces';
import { processTargets } from '@ops/exporter/processTargets';
import { writeTsPathWorkspacePaths } from '@ops/exporter/writeTsPathWorkspacePaths';

(async () => {
  try {
    const targetDirPath = await resolveTargetDirPath();
    const record = await findTargets(targetDirPath);
    const { targets, workspaces, tsPathRecord } = record;
    await writePkgWorkspaces(workspaces);
    await writeTsPathWorkspacePaths(tsPathRecord);
    processTargets(targets);
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  }
})(); 
