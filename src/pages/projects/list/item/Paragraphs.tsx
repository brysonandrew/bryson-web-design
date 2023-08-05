import { type FC } from 'react';
import { TItem } from '@t/projects';

type TProps = Required<Pick<TItem, 'paragraphs'>>;
export const Paragraphs: FC<TProps> = ({ paragraphs }) => {
  return (
    <div>
      <ul>
        {paragraphs.map((paragraph, index) => (
          <li key={`index-${index}`}>
            <p>{paragraph}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
