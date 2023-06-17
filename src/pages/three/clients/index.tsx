import { Html, Scroll } from '@react-three/drei';
import { Content } from './Content';
import { DoubleSide } from 'three';
import { Shell } from './Shell';

export const Clients = () => {
  return (
    <Html>
      <div
        className='absolute'
        style={{
          top: '300vh',
          transform: 'translateX(-50%)',
        }}
      >
        <Shell />
      </div>
    </Html>
  );
};
