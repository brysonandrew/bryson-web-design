import { useMotionTemplate } from 'framer-motion';
import { TChildren } from '@brysonandrew/config-types/dom';
import {
  TMotionBlurProps,
  TTransformerProps,
} from '@brysonandrew/svg-filter';

type TProps = TTransformerProps & {
  children(props: TMotionBlurProps): TChildren;
};
export const Motion2TransformerY = ({
  velocity,
  acceleration,
  children,
}: TProps) => {
  const turbulence = useMotionTemplate`${acceleration} 0`;
  const blur = useMotionTemplate`0 ${velocity}`;
  return (
    <>
      {children({
        turbulence,
        blur,
      })}
    </>
  );
};
