import { TChildren } from '@t/index';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TItem = {
  key: string;
  children: TChildren;
} & HTMLMotionProps<'li'>;
type TProps = { items: TItem[] };
export const TickList: FC<TProps> = ({ items }) => {
  return (
    <ul className='w-full'>
      {items.map(({ key, children, ...props }) => (
        <motion.li
          key={key}
          className='relative w-full'
          {...props}
        >
          {children}
        </motion.li>
      ))}
    </ul>
  );
};
