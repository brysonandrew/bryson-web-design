export const replaceRegularWith400 = (file: string) => {
  const rx = new RegExp('regular', 'gi');
  file = file.replace(rx, '400');
  return file;
};
