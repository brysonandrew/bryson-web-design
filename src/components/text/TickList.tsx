import { I } from '@components/Icon';
import { TICK_CIRCLE_ICON } from '@constants/icons';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = { items: string[], color?: string };
export const TickList: FC<TProps> = ({ items,color }) => {
  return (
    <ul className='column-start gap-2 w-full h-full grow'>
      {items.map((content) => (
        <li
          key={content}
          className='relative row-start gap-2 w-full leading-7 py-0.5'
        >
          <I
            icon={TICK_CIRCLE_ICON}
            className={clsx('w-5 h-5 mt-1 shrink-0', color)}
          />
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
