import { titleToUpperSnake } from '@brysonandrew/utils';
import { QUOTE } from '@ops/config/constants';

const quoteWrap = (v: string) => `${QUOTE}${v}${QUOTE}`;
const commaTrail = (v: string) => `${v},`;
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
        : JSON.stringify(item, null, 2),
    ),
  );

export const templateArray = ({ name, items }: TConfig) => {
  return `export const ${titleToUpperSnake(name)} = [
  ${resolveItems(items).join(`
`)}
]`;
};

export const templateArrayConst = (config: TConfig) => {
  return `${templateArray(config)} as const;
`;
};
