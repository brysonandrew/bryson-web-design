import { Fragment, type FC } from 'react';
import { TItem } from '@brysonandrew/gallery/config/types';

type TProps = Required<Pick<TItem, 'paragraphs'>>;
export const Paragraphs: FC<TProps> = ({ paragraphs }) => {
  return (
    <div className='relative'>
      <ul>
        {paragraphs.map((paragraph, index) => (
          <Fragment key={`index-${index}`}>
            {index !== 0 && <li className='py-1' />}
            <li>
              <p className='text-2xl font-sans'>
                {paragraph}
              </p>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
