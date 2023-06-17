import { useViewport } from '@moth/hooks/useViewport';
import { Image, ImageProps } from '@react-three/drei';

import { useMemo, type FC } from 'react';
type TProps = ImageProps & {
  index: number;
  count: number;
};
export const Box: FC<TProps> = ({ count, ...props }) => {
  const vp = useViewport();
  const w = 40;
  const x = vp.width * 0.1 * props.index - vp.width * 0.4;
  const y = -20;
  
  // useMemo(() => {
  //   return (
  //     Math.sin(((props.index + 0.5) / count) * Math.PI) *
  //       20 -
  //     20 - Math.random() * 10
  //   );
  // }, []);
  const z = useMemo(() => Math.random() * 40, []);
  return (
    <group>
      {props.url && (
        <Image
          scale={[w, 20]}
          position={[x, y, z]}
          {...props}
        />
      )}
    </group>
  );
};
