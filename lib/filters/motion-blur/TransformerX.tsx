import { useMotionTemplate } from 'framer-motion';
import { TChildren } from '@brysonandrew/types/dom';
import { TMotionBlurProps, TTransformerProps } from '@brysonandrew/filters';

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
