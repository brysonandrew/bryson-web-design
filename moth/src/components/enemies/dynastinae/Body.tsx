import { Eyes } from "@components/tagmata/eyes";
import { Elite } from "@components/tagmata/thoraces/elite";
import { Warlord as Wings } from "@components/tagmata/wings/warlord";
import { GREY, RED } from "@constants/colors";
import type { FC } from "react";

export const Body: FC = () => (
  <group>
    <group position={[0, -4.2, -1]} rotation={[0, 0, 0]}>
      <Eyes span={2} scale={0.4} color={RED} />
    </group>
    <group position={[0, 0.1, 0]} rotation={[0, 0, 0]}>
      <Wings span={0.4} scale={0.04} color={GREY} />
    </group>
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <Elite color={GREY} scale={0.04} />
    </group>
  </group>
);
