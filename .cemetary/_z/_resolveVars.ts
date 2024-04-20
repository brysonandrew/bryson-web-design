export const resolveVarValues = (file: string) => {
  const values: string[] = [];
  const x = new RegExp('export const ', 'g');
  const tails = file.split(x).slice(1);
  tails.forEach((tail) => {
    if (tail) {
      tail = tail.replace(/[{}]/, '');
      const endIndex = tail.search(/[:\s]/);

      const value = tail.slice(0, endIndex);
      values.push(value);
    }
  });

  // const varValues = resolveVarValues(file);
  // if (varValues.length > 0) {
  //   const libImportKey = `${INTERNAL_PREFIX}${name}/${importPath}`;
  //   KEYS.forEach((v) => {
  //     if (filePath.includes(v)) {
  //       varsRecords[v] = {
  //         ...varsRecords[v],
  //         [libImportKey]: varValues,
  //       };
  //     }
  //   });
  // }

  return values;
};
