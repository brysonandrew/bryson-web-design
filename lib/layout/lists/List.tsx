import { TChildren } from '@brysonandrew/config-types';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TItem = {
  key?: string;
  children: TChildren;
} & HTMLMotionProps<'li'>;
type TProps = { items: TItem[] };
export const List: FC<TProps> = ({ items }) => {
  return (
    <ul className='w-full'>
      {items.map(({ key, children, ...props }, index) => (
        <motion.li
          key={typeof key === 'string' ? key : `${index}`}
          className='relative w-full'
          
          {...props}
          
        >
          {children}
        </motion.li>
      ))}
    </ul>
  );
};
