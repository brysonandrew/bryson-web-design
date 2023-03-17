import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Effects } from "./effects";
import { Content } from "./Content";
import { HeadsUpDisplay } from "./HeadsUpDisplay";
import { Marker } from "./Marker";
import { DotMap } from "./DotMap";
import { useContext } from "./state/Context";

export const Main: FC = () => {
  const { scrollArea } = useContext();
  return (
    <>
      <Canvas
        orthographic
        dpr={[1, 1.5]}
        frameloop="always"
        camera={{ zoom: 1, position: [0, 0, 500] }}
        style={{
          zIndex: 9,
          backgroundColor: "rgba(20,20,0,0.1)",
        }}
        onCreated={(state) =>
          state.events.connect?.(scrollArea)
        }
      >
        <Effects>
          <Suspense fallback={null}>
            <Content />
            <HeadsUpDisplay>
              <DotMap />
              <Marker />
            </HeadsUpDisplay>
          </Suspense>
        </Effects>
      </Canvas>
    </>
  );
};
// raycaster={{
//    : ({
//     offsetX,
//     offsetY,
//   }: {
//     offsetX: number;
//     offsetY: number;
//   }) => ({
//     offsetX:
//       offsetX - scrollArea.scrollLeft,
//     offsetY,
//   }),
// }}
