import { Eyes } from "@components/tagmata/eyes";
import { Reptile as Thorax } from "@components/tagmata/thoraces/reptile";
import { Warlord as Wings } from "@components/tagmata/wings/warlord";
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
