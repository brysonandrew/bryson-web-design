import { useMotionTemplate } from 'framer-motion';
import { TChildren } from '@brysonandrew/types/dom';
import {
  TMotionBlurProps,
  TTransformerProps,
} from '@brysonandrew/filters';

type TProps = TTransformerProps & {
  children(props: TMotionBlurProps): TChildren;
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
