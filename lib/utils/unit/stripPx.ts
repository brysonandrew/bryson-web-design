export const stripPx = (value: string | number): number =>
  typeof value === 'number'
    ? value
    : Number(value.replace('px', ''));
