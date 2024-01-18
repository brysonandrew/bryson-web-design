import { useMotionTemplate } from 'framer-motion';
import { TChildren } from '@brysonandrew/lib/types/dom';
import { TTransformerProps } from './TransformerY';
import { TFilterProps } from './config';

type TProps = TTransformerProps & {
  children(props: TFilterProps): TChildren;
};
export const TransformerX = ({
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
