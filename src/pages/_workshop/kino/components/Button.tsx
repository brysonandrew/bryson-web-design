import { TChildrenProps, TClassValueProps } from 'lib/types/dom';
import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PRESENCE_OPACITY } from 'lib/animation/constants';

type TProps = TClassValueProps &
  TChildrenProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  };
export const Button: FC<TProps> = ({
  classValue,
  isLoading = false,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'relative uppercase text-xl px-3 py-1 bg-black-1 text-highlight disabled:(text-gray cursor-not-allowed)',
        classValue,
      )}
      {...props}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key='LOADING'
            className='absolute inset-0 bg-highlight'
            {...PRESENCE_OPACITY}
          />
        )}
      </AnimatePresence>
      <div className='relative'>{children}</div>
    </button>
  );
};
