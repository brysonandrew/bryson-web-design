import { find } from './find';
import { init } from './init';
import { cache } from './cache';
import { process } from './process';
import { workspaces } from './workspaces';

(async () => {
  try {
    const workspacePath = init();
    const targets = find(workspacePath);
    // cache(targets);
    const values = Object.values(targets);
    workspaces(values);
    process(values);
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  }
})();
