import type { FC } from 'react';

import reactSvg from './react.png';
import plusSvg from './plus-thick.svg';
import typescriptSvg from './typescript.png';
import { Image, Svg } from '@react-three/drei';
import { TECH } from '@constants/tech';

const SPAN = 100;
const SPAN_05 = SPAN * 0.5;

const BUTTON_Z = 20;

type TProps = any;
export const Tech: FC<TProps> = () => {
  const handleReactClick = () => {
    window.location.href = TECH.REACT.href;
  };
  const handleTypescriptClick = () => {
    window.location.href = TECH.REACT.href;
  };
  return (
    <group>
      <Image
        onClick={handleReactClick}
        position={[-SPAN_05, 0, BUTTON_Z]}
        scale={[44, 18]}
        url={reactSvg}
      />
      <Svg src={plusSvg} />
      <Image
        onClick={handleTypescriptClick}
        position={[SPAN_05, 2, BUTTON_Z]}
        scale={[64, 18]}
        url={typescriptSvg}
      />
    </group>
  );
};
