import { useViewportHeight } from "@moth-hooks/useViewportHeight";
import { useMothContext } from "@moth-state/Context";
import type { TSpawn } from "@moth-state/types";
import { Text } from "@react-three/drei";
import type { FC } from "react";
import {
  COUNTER_WIDTH,
  HEIGHT,
  PADDING,
  WIDTH,
} from "../constants";
import { Background } from "./Background";
import { Counter } from "./Counter";
import { resolveBossTitle } from "@moth-utils/resolveBossTitle";

type TProps = {
  boss: TSpawn;
  index: number;
};
export const HealthBar: FC<TProps> = ({ boss, index }) => {
  const viewportHeight = useViewportHeight();
  const { damage: damageRecord } = useMothContext();
  const damage = damageRecord[boss.name];
  const deathPercent = damage / (boss.health ?? 1);
  let healthLeft =
    COUNTER_WIDTH - deathPercent * COUNTER_WIDTH;
  healthLeft = isNaN(healthLeft) ? 100 : healthLeft;
  if (healthLeft <= 0) return null;

  return (
    <group
      position={[
        0,
        HEIGHT +
          index * HEIGHT +
          PADDING -
          viewportHeight * 0.5,
        0,
      ]}
    >
      <Text
        color="white"
        fontSize={2}
        anchorX="left"
        anchorY="middle"
        letterSpacing={0.4}
        rotation={[0, 0, 0]}
        position={[-WIDTH / 2 + 1.5, -PADDING * 0.5, 0]}
      >
        {resolveBossTitle(boss.type)}
      </Text>
      <Background />
      <Counter healthLeft={healthLeft} />
    </group>
  );
};
