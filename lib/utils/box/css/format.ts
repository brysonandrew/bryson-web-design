export const formatCss = (o: object) =>
  Object.entries(o)
    .map((entry) => entry.join(': '))
    .join(';\n');
