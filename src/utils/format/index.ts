import { TTCamelToKebab } from '@t/transformers/format';

export const capitalize = (word: string | null) =>
  word
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : '';

export const kebabToTitle = (slug: string): string =>
  slug.split('-').map(capitalize).join(' ');
export const kebabToPascal = (slug: string): string =>
  slug.split('-').map(capitalize).join('');
export const pascalToTitle = (pascal: string): string =>
  pascal.split(/(?=[A-Z])/).join(' ');

export const titleToKebab = <I extends string>(
  title: I,
): TTCamelToKebab<I> =>
  title
    .split(' ')
    .map((v) => v.toLowerCase())
    .join('-') as TTCamelToKebab<I>;


export const nToMoney = (n:number) => `$${n.toLocaleString()}.00`