import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { TChildrenStrings } from '@brysonandrew/config-types/dom/main';
import { resolveCompositeKey } from '@brysonandrew/utils-key';
import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { ShiftUp } from './ShiftUp';

type TProps = TDivMotionProps &
  TChildrenStrings & {
    prevCount?: number;
  };
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
          classValue={cx(classValue)}
          {...animation(prevCount + ci)}
          {...props}
        >
          {char}
        </ShiftUp>
      ))}
    </>
  );
};
