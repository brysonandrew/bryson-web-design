import type { MotionValue } from 'framer-motion';
import { useMotionTemplate } from 'framer-motion';
import { TChildren } from 'lib/types/dom';
import { TFilterProps } from './config';

export type TTransformerProps = {
  velocity: MotionValue;
  acceleration: MotionValue;
};
type TProps = TTransformerProps & {
  children(props: TFilterProps): TChildren;
};
export const TransformerY = ({
  velocity,
  acceleration,
  children,
}: TProps) => {
  const turbulence = useMotionTemplate`${velocity} 0`;
  const blur = useMotionTemplate`0 ${acceleration}`;
  return (
    <>
      {children({
        turbulence,
        blur,
      })}
    </>
  );
};
