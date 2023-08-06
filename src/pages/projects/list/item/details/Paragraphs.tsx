import { Fragment, type FC } from 'react';
import { TItem } from '@t/projects';

type TProps = Required<Pick<TItem, 'paragraphs'>>;
export const Paragraphs: FC<TProps> = ({ paragraphs }) => {
  return (
    <div className='relative'>
      <ul>
        {paragraphs.map((paragraph, index) => (
          <Fragment key={`index-${index}`}>
            {index !== 0 && <li className='py-1' />}
            <li>
              <p className='text-xl'>{paragraph}</p>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
