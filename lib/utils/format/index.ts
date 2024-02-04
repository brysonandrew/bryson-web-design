export const capitalize = (word: string | null) =>
  word
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : '';

export const kebabToSnake = <I extends string>(slug: I) =>
  slug.split('-').join('_');
export const kebabToTitle = <I extends string>(slug: I) =>
  slug.split('-').map(capitalize).join(' ');
export const kebabToPascal = <I extends string>(slug: I) =>
  slug.split('-').map(capitalize).join('');
export const pascalToTitle = (pascal: string): string =>
  pascal.split(/(?=[A-Z])/).join(' ');

export const titleToKebab = <I extends string>(title: I) =>
  title
    .split(' ')
    .map((v) => v.toLowerCase())
    .join('-');
export const titleToUpperSnake = <I extends string>(
  title: I,
) =>
  title
    .split(' ')
    .map((v) => v.toUpperCase())
    .join('_');

export const nToMoney = (n: number) =>
  `$${n.toLocaleString()}`;

export const formatNZLongDate = (date: Date) => {
  const dateStr = new Intl.DateTimeFormat('en-NZ', {
    dateStyle: 'short',
    timeZone: 'Pacific/Auckland',
  }).format(date);
  return dateStr;
};

export const formateShortDate = (time?: Date) => {
  if (typeof time === 'undefined') return 'Present';
  return new Intl.DateTimeFormat('en-UK', {
    month: 'short',
    year: 'numeric',
  }).format(time);
};
