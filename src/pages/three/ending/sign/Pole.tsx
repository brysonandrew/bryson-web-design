import { type FC } from 'react';
import { DoubleSide } from 'three';

type TProps = { children: any };
export const Pole: FC<TProps> = ({ children }) => (
  <group>
    <mesh>
      <cylinderGeometry args={[2, 2, 100, 32]} />
      <meshBasicMaterial
        attach='material'
        color='#333'
        opacity={0.9}
        transparent
        side={DoubleSide}
      />
    </mesh>
    {children}
  </group>
);
