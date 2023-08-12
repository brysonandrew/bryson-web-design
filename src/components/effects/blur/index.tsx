import { TChildren } from '@t/index';
import { MotionStyle } from 'framer-motion';
import { FC } from 'react';

type TProps = {
  isOn: boolean;
  children(filterProps: MotionStyle): TChildren;
};
export const Blur: FC<TProps> = ({ isOn, children }) => {
  if (!isOn) return children({});
  return (
    <>
      {children({
        scaleY: 4,
        filter: 'blur(8px)',
      })}
    </>
  );
};
