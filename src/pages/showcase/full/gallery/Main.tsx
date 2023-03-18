import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Effects } from "./effects";
import { Content } from "./Content";
import { HeadsUpDisplay } from "./heads-up-display";
import { useContext } from "./state/Context";

export const Main: FC = () => {
  const { scrollArea } = useContext();

  return (
    <>
      <Canvas
        orthographic
        dpr={[1, 1.5]}
        camera={{ zoom: 1, position: [0, 0, 500] }}
        raycaster={
          {
            computeOffsets: ({
              offsetX,
              offsetY,
            }: any) => ({
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
        <Effects>
          <Suspense fallback={null}>
            <Content />
            <HeadsUpDisplay/>
          </Suspense>
        </Effects>
      </Canvas>
    </>
  );
};
