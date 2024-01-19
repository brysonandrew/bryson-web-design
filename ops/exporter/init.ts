import { workspaces } from '../../package.json';
import path from 'path';
const isValidWorkspace = (arg: string) =>
  workspaces.includes(arg);

export const init = () => {
  try {
    const cwd = process.env.PROJECT_CWD || '';
    const args = process.argv;
    const passedArg = args[args.length - 1];
    
    // if (!isValidWorkspace(passedArg)) {
    //   throw Error(
    //     'Please enter a valid workplace argument',
    //   );
    // }
    return path.join(cwd, passedArg);
  } catch (error: any) {
    console.log(`init - something went wrong `, error);
    throw Error(error);
  }
};
