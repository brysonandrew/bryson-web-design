import { Eyes } from "@moth-components/tagmata/eyes";
import { Basic as Thorax } from "@moth-components/tagmata/thoraces/Basic";
import { Basic as Wings } from "@moth-components/tagmata/wings/basic";
import {
  GREY,
  LIGHTER_BLACK,
  LIGHT_BLACK,
  RED,
} from "@moth-constants/colors";
import type { FC } from "react";
import { DoubleSide } from "three";

export const Body: FC = () => (
    <group scale={1} rotation={[Math.PI, 0, 0]}>
      <Thorax color={GREY} />
      <mesh position={[0, 3.5, 0]}>
        <circleGeometry args={[1.5, 32]} />
        <meshBasicMaterial
          color={LIGHT_BLACK}
          side={DoubleSide}
        />
      </mesh>
      <group position={[0, 2, 0]}>
        <Wings span={2.6} scale={2} color={LIGHTER_BLACK} />
        <Wings span={2} color={LIGHT_BLACK} />
      </group>
      <group position={[0, 6, 0]}>
        <Eyes span={2} color={RED} />
      </group>
    </group>
  );
