
import { Canvas as _Canvas } from '@react-three/fiber';
import { PAGES, PAGES_COUNT } from '../config';
import { Page } from './Page';
import { Scroll, ScrollControls } from '@react-three/drei';

export const Canvas = () => {
  return (
    <_Canvas
      style={{ position: 'fixed' }}
      camera={{
        zoom: 1,
        position: [0, 0, 100],
      }}
    >
      <ambientLight />
      <ScrollControls pages={PAGES_COUNT}>
        <>
          {PAGES.map((page, index) => {
            return <Page {...page} index={index} />;
          })}
        </>
      </ScrollControls>
    </_Canvas>
  );
};
