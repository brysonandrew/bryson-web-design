import { useDetectGPU } from '@react-three/drei';
import {
  AnimatePresence,
  type HTMLMotionProps,
} from 'framer-motion';
import type { FC } from 'react';
import { Motion } from './motion';
import { HEIGHT, Swarm } from './Swarm';
import { InView } from '@components/InView';

type TProps = HTMLMotionProps<'div'>;
export const Images: FC<TProps> = () => {
  const { tier, isMobile } = useDetectGPU();
  if (isMobile) return <Swarm />;

  switch (tier) {
    case 3: {
      return (
        <InView
          className='relative w-full'
          style={{ height: HEIGHT }}
        >
          {(isInView) => (
            <AnimatePresence>
              {isInView ? (
                <Motion>
                  {(props) => <Swarm {...props} />}
                </Motion>
              ) : null}
            </AnimatePresence>
          )}
        </InView>
      );
    }
    default: {
      return <Swarm />;
    }
  }
};
