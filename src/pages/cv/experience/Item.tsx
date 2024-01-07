import type { TItem } from '@t/projects';
import type { FC } from 'react';
import { Fragment } from 'react';
import { Margin } from '../layout/Margin';

type TProps = TItem & {
  index: number;
};
export const Item: FC<TProps> = ({
  index,
  ...item
}: TProps) => (
  <Fragment>
    <li className='relative flex items-center justify-center py-6'>
      {index % 2 === 0 ? null : (
        <div className='absolute inset-0 bg-black-2' />
      )}
      <Margin>
        <div className='flex items-center justify-between text-white-9-7'>
          <div className='relative'>
            <p className='absolute right-full top-0 mr-4 text-right'>
              {new Intl.DateTimeFormat('en-UK', {
                month: 'short',
                year: 'numeric',
              }).format(item.time)}
            </p>
            <h6 className='text-md text-white-9'>
              {item.title}
            </h6>
          </div>
          <p className='text-md'>{item.description}</p>
        </div>
        <div className='py-1' />
        <div className='text-sm'>
          {item.paragraphs && (
            <ul>
              {item.paragraphs.map((v, index) => (
                <Fragment key={`index-${index}`}>
                  <li className='py-0.25' />
                  <li>
                    <p>{v}</p>
                  </li>
                </Fragment>
              ))}
            </ul>
          )}
          {item.tags && (
            <>
              <div className='py-1' />
              <i className='text-white-9-7'>
                {item.tags
                  .map(({ title }) => title)
                  .join(', ')}
              </i>
            </>
          )}
        </div>
      </Margin>
    </li>
  </Fragment>
);
