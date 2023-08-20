import type { MotionValue } from 'framer-motion';
import { useMotionTemplate } from 'framer-motion';
import { TChildren } from '@t/index';
import { TFilterProps } from './Filter';

export type TTransformerProps = {
  velocity: MotionValue;
  acceleration: MotionValue;
};
type TProps = TTransformerProps & {
  children(props: TFilterProps): TChildren;
};
export const Transformer = ({
  velocity,
  acceleration,
  children,
}: TProps) => {
  const turbulence = useMotionTemplate`0 ${velocity}`;
  const blur = useMotionTemplate`${acceleration} 0`;
  return (
    <>
      {children({
        turbulence,
        blur,
      })}
    </>
  );
};
