import path from "path";

export const nameFromPath = (file: string, marker: string) => {
  const { dir } = path.parse(file);
  if (!dir) return null;
  const removeRxPre = new RegExp(`.+((?=)${marker})`);
  const noPre = file.replace(removeRxPre, "");
  const removeRxPost = /[/-]+.+/;
  return noPre.replace(removeRxPost, "");
};

export const tailFromPath = (file: string, name: string) => {
  const rx = new RegExp(`.+((?<=)/${name}/)`);
  return file.replace(rx, "");
};
