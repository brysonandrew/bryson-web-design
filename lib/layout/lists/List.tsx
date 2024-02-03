import { TChildren } from '@brysonandrew/config/types/dom';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TItem = {
  key: string;
  children: TChildren;
} & HTMLMotionProps<'li'>;
type TProps = { items: TItem[] };
export const List: FC<TProps> = ({ items }) => {
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
