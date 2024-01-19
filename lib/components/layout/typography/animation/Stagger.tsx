import { TDivMotionProps } from '@brysonandrew/lib/types/dom/motion';
import {
  TChildrenStrings,
  TClassValueProps,
} from '@brysonandrew/lib/types/dom/main';
import { resolveCompositeKey } from '@brysonandrew/lib/utils/key';
import clsx from 'clsx';
import { FC } from 'react';
import { ShiftUp } from './ShiftUp';

type TProps = TClassValueProps & {
  prevCount?: number;
} & TDivMotionProps &
  TChildrenStrings;
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
