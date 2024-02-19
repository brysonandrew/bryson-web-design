import type { TTTitleToKebab } from '@brysonandrew/config-types';

export const capitalize = (word: string | null) =>
  word
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : '';

export const lowerCase = <I extends string>(
  value: I,
): Lowercase<I> => value.toLowerCase() as Lowercase<I>;

export const upperCase = <I extends string>(
  value: I,
): Uppercase<I> => value.toUpperCase() as Uppercase<I>;

export const kebabToSnake = <I extends string>(value: I) =>
  value.split('-').join('_');
export const kebabToTitle = <I extends string>(value: I) =>
  value.split('-').map(capitalize).join(' ');
export const kebabToPascal = <I extends string>(value: I) =>
  value.split('-').map(capitalize).join('');
export const pascalToTitle = (pascal: string): string =>
  pascal.split(/(?=[A-Z])/).join(' ');

export const titleToKebab = <I extends string>(
  title: I,
): TTTitleToKebab<I> => {
  const result = title.split(' ').map(lowerCase).join('-');
  return result as TTTitleToKebab<I>;
};
export const titleToUpperSnake = <I extends string>(
  title: I,
) =>
  title
    .split(' ')
    .map(upperCase)
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

export * from './url';
