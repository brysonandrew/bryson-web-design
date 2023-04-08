import { Eyes } from "@components/tagmata/eyes";
import { Warlock as Thorax } from "@components/tagmata/thoraces/warlock";
import { Octoman as Wings } from "@components/tagmata/wings/octoman";
import { DARK_PURPLE, GREY, RED } from "@constants/colors";
import type { FC } from "react";

export const Body: FC = () => (
  <>
    <Thorax scale={0.04} color={DARK_PURPLE} />
    <Wings scale={0.04} span={-3} color={GREY} />
    <group position={[0, -4.2, -1]}>
      <Eyes color={RED} span={2} />
    </group>
  </>
);
