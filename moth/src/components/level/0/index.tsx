import { HEIGHT } from "@moth-constants/index";
import { useViewportWidth } from "@moth-hooks/useViewportWidth";
import { Artefacts } from "./Artefacts";

export const Level0 = () => {
  const width = useViewportWidth();
  const height = HEIGHT;
  return (
    <group>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color="rgb(11, 11, 11)" />
      </mesh>
      <Artefacts {...{ width, height }} />
    </group>
  );
};
