import { useMotionTemplate } from 'framer-motion';
import { TChildren } from '@brysonandrew/config-types/dom';
import {
  TMotionBlurProps,
  TTransformerProps,
} from '@brysonandrew/svg-filter';

type TProps = TTransformerProps & {
  children(props: TMotionBlurProps): TChildren;
};
export const Motion2TransformerX = ({
  velocity,
  acceleration,
  children,
}: TProps) => {
  const turbulence = useMotionTemplate`0 ${acceleration}`;
  const blur = useMotionTemplate`${velocity} 0`;
  return (
    <>
      {children({
        turbulence,
        blur,
      })}
    </>
  );
};
