import { useMotionTemplate } from 'framer-motion';
import { TChildren } from '@brysonandrew/base/types/dom';
import { TMotionBlurProps, TTransformerProps } from './config';

type TProps = TTransformerProps & {
  children(props: TMotionBlurProps): TChildren;
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
