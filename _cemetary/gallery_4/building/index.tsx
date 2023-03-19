import { motion } from "framer-motion-3d";
import styled from "@emotion/styled";
import { Grid, Svg } from "@react-three/drei";
import { Lighting } from "../Lighting";
import { Pattern } from "./Pattern";
import { degToRad } from "three/src/math/MathUtils";

const Back = styled(motion.mesh)``;
const Middle = styled(motion.mesh)``;

export const Building = () => (
  <group position={[0, 0, 0]}>
    <Pattern
      receiveShadow
      castShadow
      shiftFactor={1}
      position={[-40, 10, -60]}
      rotation={[degToRad(90), 0, 0]}
      rowCount={4}
      colCount={4}
      // scale={[40, 40, 2]}
    />
    <Lighting />
    {/* <Pattern
      receiveShadow
      castShadow
      position={[0, 10, 35]}
      // scale={[1, 40, 40]}
    /> */}
    {/* <Middle
      receiveShadow
      castShadow
      position={[0, 10, 35]}
      scale={[1, 40, 40]}
    >
      <boxGeometry />
      <meshStandardMaterial color="purple" />
    </Middle> */}
    {/* <Back
      receiveShadow
      castShadow
      position={[-22, 10, 3]}
      scale={[40, 40, 2]}
      // whileHover={{ x: -22 }}
    >
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </Back> */}
  </group>
);
