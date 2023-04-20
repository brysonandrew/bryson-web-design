import { useViewportWidth } from "@moth-hooks/useViewportWidth";
import { Artefacts } from "./Artefacts";
import { Enemies } from "./Enemies";
import { HEIGHT } from "./constants";
import { resolveShade } from "@moth-utils/colors";

export const LighthouseCaptain = () => {
  const width = useViewportWidth();
  const height = HEIGHT;
  return (
    <>
      <group>
        <mesh>
          <planeGeometry args={[width, height]} />
          <meshBasicMaterial color={resolveShade(0.05)} />
        </mesh>
        <Artefacts {...{ width, height }} />
      </group>
      <Enemies />
    </>
  );
};
 