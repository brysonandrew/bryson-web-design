export const exportsPrefixStr = 'export * from ';
export const exportsPrefixRx = new RegExp(
  'export.*from',
  'gi',
);
export const removeCharsRx = new RegExp(`[;"']`, 'gi');
