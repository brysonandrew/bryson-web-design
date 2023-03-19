import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Content } from "./content";
import { HeadsUpDisplay } from "./heads-up-display";
import { useContext } from "./state/Context";
import { Scene } from "./Scene";
import { Effects } from "./effects";

export const Main: FC = () => {
  const { scrollArea } = useContext();

  return (
    <Canvas
      orthographic
      dpr={[1, 1.5]}
      camera={{ zoom: 1, position: [0, 0, 500] }}
      raycaster={
        {
          computeOffsets: ({ offsetX, offsetY }: any) => ({
            offsetX: offsetX - scrollArea.scrollLeft,
            offsetY,
          }),
        } as any
      }
      onCreated={(state) => {
        if (state.events.connect) {
          state.events.connect(scrollArea);
        }
      }}
    >
      <Scene>
        {(scene) => (
          <Suspense fallback={null}>
            <Effects scene={scene} />
            <Content />
            <HeadsUpDisplay />
          </Suspense>
        )}
      </Scene>
    </Canvas>
  );
};
