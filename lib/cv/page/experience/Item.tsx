import type { TInitItem } from '@app/gallery/types';
import clsx from 'clsx';
import type { FC } from 'react';
import { Fragment } from 'react';
import { Margin } from '../Margin';
import { resolveTime } from './resolveTime';

type TProps = TInitItem & {
  index: number;
};
export const Item: FC<TProps> = ({
  index,
  time,
  ...item
}: TProps) => (
  <Fragment>
    <li className='relative center py-8'>
      <div
        className={clsx(
          'absolute inset-0',
          index % 2 === 0 ? 'bg-black-1' : 'bg-black-2',
        )}
      />
      <Margin>
        <div className='row-space'>
          <div className='relative'>
            <p className='absolute right-full top-0 mr-4 text-right'>
              {resolveTime({ time })}
            </p>
            <h6>{item.title}</h6>
          </div>
          <p>{item.description}</p>
        </div>
        <div className='py-1' />
        <div>
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
              <i>
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
