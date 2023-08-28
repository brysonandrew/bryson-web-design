import { ASSETS_SCREENS } from '../../config';

type TDir = string;
type TName = string;
type TExt = string;
type TFileName = `${TName}.${TExt}`;
type TMediaEntry =
  `${typeof ASSETS_SCREENS}/${TDir}/${TName}/${TFileName}`;
export const resolveFsInfo = (
  entry: TMediaEntry | string,
) => {
  const [path, ext] = entry.split('.');
  const [fileName, name, dir] = entry
    .split('/')
    .filter(Boolean)
    .reverse();

  return {
    dir,
    name,
    fileName,
    path,
    ext,
  };
};
