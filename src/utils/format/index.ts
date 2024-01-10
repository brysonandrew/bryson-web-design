import {
  TTCamelToKebab,
  TTTitleToKebab,
} from '@t/transformers/format';
import { TTKebabToPascal } from '@t/transformers/format/pascal';

export const capitalize = (word: string | null) =>
  word
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : '';

export const kebabToTitle = <I extends string>(
  slug: I,
): TTKebabToPascal<I> =>
  slug
    .split('-')
    .map(capitalize)
    .join(' ') as TTKebabToPascal<I>;
export const kebabToPascal = <I extends string>(
  slug: I,
): TTKebabToPascal<I> =>
  slug
    .split('-')
    .map(capitalize)
    .join('') as TTKebabToPascal<I>;
export const pascalToTitle = (pascal: string): string =>
  pascal.split(/(?=[A-Z])/).join(' ');

export const titleToKebab = <I extends string>(
  title: I,
): TTTitleToKebab<I> =>
  title
    .split(' ')
    .map((v) => v.toLowerCase())
    .join('-') as TTTitleToKebab<I>;

export const nToMoney = (n: number) =>
  `$${n.toLocaleString()}`;

export const formatNZLongDate = (date: Date) => {
  const dateStr = new Intl.DateTimeFormat('en-NZ', {
    dateStyle: 'short',
    timeZone: 'Pacific/Auckland',
  }).format(date);
  return dateStr;
};
