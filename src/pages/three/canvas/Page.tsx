import { type FC } from 'react';
import { Title } from './Title';
import { useViewport } from '@moth/hooks/useViewport';
import COLORS from '@windi/config-colors.json';
import { TPage } from '../config';
import { Scroll } from '@react-three/drei';

type TProps = TPage & { index: number };
export const Page: FC<TProps> = ({
  title,
  Component,
  index,
}) => {
  const vp = useViewport();
  return (
    <Scroll>
      <group position={[0, -vp.height * index, 0]}>
        <pointLight />
        <mesh>
          <planeGeometry args={[vp.width, vp.height]} />
          <meshStandardMaterial
            color={
              index % 2 === 0
                ? COLORS['black']
                : COLORS['black-dark']
            }
          />
        </mesh>
        {title && <Title>{title}</Title>}
        {Component && <Component />}
      </group>
    </Scroll>
  );
};
