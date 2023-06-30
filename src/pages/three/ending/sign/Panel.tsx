import { Text } from '@react-three/drei';
import COLORS from '@windi/config-colors.json';
import { useEffect, useState, type FC } from 'react';
import { DoubleSide } from 'three';

type TProps = {
  children: string;
  rotationY: number;
  positionY: number;
  positionX?: number;
  onPointerDown(): void;
};
export const Panel: FC<TProps> = ({
  rotationY,
  positionY,
  positionX = 0,
  onPointerDown,
  children,
}) => {
  const [isHover, setHover] = useState(false);
  useEffect(() => {
    if (isHover) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [isHover]);

  return (
    <group
      position={[25 + positionX, positionY, 0]}
      // rotation={[0, radians * (180 / Math.PI), 0]}
      onPointerDown={onPointerDown}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
    >
      <mesh>
        <planeGeometry args={[50, 12]} />
        <meshBasicMaterial
          attach='material'
          color={isHover ? '#444' : '#333'}
          opacity={isHover ? 1 : 0.8}
          transparent
          side={DoubleSide}
        />
      </mesh>
      <Text
        color={
          isHover ? COLORS['white'] : COLORS['baby-blue']
        }
        anchorX='center'
        anchorY='bottom'
        font={'/fonts/Didot.ttf'}
        fontSize={6}
        position={[0, -3.5, 0]}
      >
        {children.toUpperCase()}
      </Text>
    </group>
  );
};
