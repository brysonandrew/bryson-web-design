import { type FC } from 'react';
import { Title } from './Title';
import { useViewport } from '@moth/hooks/useViewport';
import COLORS from '@windi/config-colors.json';
import { TPage } from '../config';
import { Color } from 'three';

type TProps = TPage & { index: number };
export const Page: FC<TProps> = ({
  title,
  Component,
  index,
}) => {
  const vp = useViewport();
  return (
    <group position={[0, -vp.height * index, 0]}>
      <mesh position={[0, 0, -20]}>
        <planeGeometry args={[vp.width, vp.height]} />
        <meshBasicMaterial
          attach='material'
          opacity={0.5}
          transparent
          color={
            new Color(
              index % 2 === 0
                ? COLORS['black']
                : COLORS['black-dark'],
            )
          }
        />
      </mesh>
      {title && <Title>{title}</Title>}
      {Component && <Component />}
    </group>
  );
};
