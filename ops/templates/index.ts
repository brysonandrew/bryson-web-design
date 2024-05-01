// import { titleToUpperSnake } from '@brysonandrew/utils';
import { titleToUpperSnake } from '@brysonandrew/utils-format';
import { QUOTE } from '@ops/config/constants';

export const quoteWrap = (v: string) =>
  `${QUOTE}${v}${QUOTE}`;
export const commaTrail = (v: string) => `${v},`;
type TItems = (string | object)[];
type TConfig = {
  name: string;
  items: TItems;
};

const resolveItems = (items: TItems) =>
  items.map((item) =>
    commaTrail(
      typeof item === 'string'
        ? quoteWrap(item)
        : JSON.stringify(item, null, 2)
    )
  );

export const templateArray = ({ name, items }: TConfig) =>
  `export const ${titleToUpperSnake(name)} = [
  ${resolveItems(items).join(`
`)}
]`;

export const templateArrayConst = (config: TConfig) => {
  return `${templateArray(config)} as const;
`;
};
