import { I } from 'lib/icons/icon';
import { TICK_CIRCLE_ICON } from 'lib/icons/constants';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = { items: string[] };
export const TickList: FC<TProps> = ({ items }) => {
  return (
    <ul className='column-start gap-2 w-full h-full grow'>
      {items.map((content) => (
        <li
          key={content}
          className='relative row-start gap-2 w-full leading-7 py-0.5'
        >
          <I
            icon={TICK_CIRCLE_ICON}
            className={clsx(
              'w-5 h-5 mt-1 shrink-0 text-current',
            )}
          />
          <p className='font-sans text-xl text-main'>
            {content}
          </p>
        </li>
      ))}
    </ul>
  );
};
