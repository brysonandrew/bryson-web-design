import { find } from './find';
import { init } from './init';
import { process } from './process';
import { workspaces } from './workspaces';

(async () => {
  try {
    const workspacePath = init();
    const targets = find(workspacePath);
    const values = Object.values(targets);
    await workspaces(values);
    process(values);
  } catch (error) {
    console.log('Exporter - something went wrong: ', error);
  }
})();
