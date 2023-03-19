import {
  Box,
  OrbitControls,
  ScreenSpace,
  Shadow,
  Text,
} from "@react-three/drei";
import { YEAR_COUNT } from "./constants";
import { useMemo } from "react";
import { useStartYear } from "./useStartYear";
import { degToRad } from "three/src/math/MathUtils";
import { Lighting } from "./Lighting";

export const Sections = () => {
  const startYear: number = useStartYear();
  return (
    <group>
      {[...Array(YEAR_COUNT)].map((_, index) => (
        <group key={`${index}`}>
          <pointLight
            castShadow
            position={[14, 24, -(20 * index + 0) + 44]}
            intensity={1}
            color="purple"
          />
          <Text
            castShadow
            anchorX="left"
            position={[12, 20, -(28 * index + 0) + 60]}
            // rotation={[0, 0, degToRad(45)]}
            fillOpacity={1 - 0.2 * index}
            scale={4}
            color="gray"
          >
            {startYear - index}
          </Text>
        </group>
      ))}
      <Lighting />
    </group>
  );
};
