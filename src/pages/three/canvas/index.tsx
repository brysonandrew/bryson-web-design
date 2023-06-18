import { Canvas as _Canvas } from '@react-three/fiber';
import { PAGES, PAGES_COUNT } from '../config';
import { Page } from './Page';
import {
  OrbitControls,
  Scroll,
  ScrollControls,
} from '@react-three/drei';
import { Clients } from '../clients';

export const Canvas = () => {
  return (
    <_Canvas
      style={{ position: 'fixed' }}
      camera={{
        zoom: 1,
        position: [0, 0, 100],
      }}
    >
      {/* <OrbitControls /> */}
      <ambientLight />
      <ScrollControls pages={PAGES_COUNT}>
        <Scroll>
          {PAGES.map((page, index) => {
            return <Page {...page} index={index} />;
          })}
        </Scroll>
        <Scroll html>
          <Clients />
        </Scroll>
      </ScrollControls>
    </_Canvas>
  );
};
