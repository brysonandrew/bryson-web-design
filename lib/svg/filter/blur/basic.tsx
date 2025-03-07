import { TChildren } from '@brysonandrew/config-types/dom';
import { MotionStyle } from 'framer-motion';
import { FC } from 'react';

type TProps = {
  isOn: boolean;
  children(filterProps: MotionStyle): TChildren;
};
export const BlurBasic: FC<TProps> = ({ isOn, children }) => {
  if (!isOn) return <>{children({})}</>;
  return (
    <>
      {children({
        scaleY: 4,
        filter: 'blur(8px)',
      })}
    </>
  );
};
