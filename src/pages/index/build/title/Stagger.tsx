import { TDivMotionProps } from '@t/dom';
import { TClassValueProps } from '@t/index';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { ShiftUp } from './ShiftUp';

type TProps = TClassValueProps & {
  children: string[];
  prevCount?: number;
} & TDivMotionProps;
export const Stagger: FC<TProps> = ({
  classValue,
  children,
  prevCount = 0,
  ...props
}) => {
  const animation = (ci: number) => ({
    transition: {
      delay: 0.5 + ci * 0.025,
      duration: 0.6,
    },
  });
  return (
    <>
      {children.map((char, ci) => (
        <ShiftUp
          key={resolveCompositeKey(char, ci)}
          classValue={clsx(classValue)}
          {...animation(prevCount + ci)}
          {...props}
        >
          {char}
        </ShiftUp>
      ))}
    </>
  );
};
