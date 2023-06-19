import { useDetectGPU } from '@react-three/drei';
import type { HTMLMotionProps } from 'framer-motion';
import type { FC } from 'react';

import { Motion } from './Motion';
import { Content } from './Content';

type TProps = HTMLMotionProps<'div'>;
export const Images: FC<TProps> = () => {
  const { tier, isMobile } = useDetectGPU();
  if (isMobile) return <Content />;

  switch (tier) {
    case 3: {
      return (
        <Motion>{(props) => <Content {...props} />}</Motion>
      );
    }
    default: {
      return <Content />;
    }
  }
};
