import { EffectComposer } from "@react-three/postprocessing";
import { FC, useState } from "react";
import { GodRaysPass } from ".";

export const Example: FC = () => {
  const [sunRef, setSunRef] = useState<THREE.Mesh>();

  return (
    <>
      <mesh
        ref={(instance) => {
          if (instance && !sunRef) {
            setSunRef(instance);
          }
        }}
      >
        <boxGeometry args={[0.01,0.01,0.02]} />
      </mesh>
      <EffectComposer autoClear={false}>
        <GodRaysPass sunRef={sunRef as THREE.Mesh} />
      </EffectComposer>
    </>
  );
};
