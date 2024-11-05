import { treeFormat } from './format';
import { underline } from './styles';

export type TTreePromptConfig = {
  items: string[];
  highlights?: string[];
  prefix: string;
};
export const treePrompt = ({
  items,
  highlights = [],
  prefix,
}: TTreePromptConfig) =>
  items
    .map(
      (filePath, i, arr) =>
        `${treeFormat(i, arr)} ${`${prefix} `}${filePath.replace(
          new RegExp(highlights.join('|')),
          (value) => underline(value),
        )}`,
    )
    .join('\n');
