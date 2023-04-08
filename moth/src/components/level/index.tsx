import { HEIGHT } from "@constants/index";
import { useMothContext } from "@state/Context";
import type { FC } from "react";
import { Level0 } from "./0";
import { Enemies } from "../enemies";
import { useSpawn } from "../../hooks/spawn/useSpawn";
import { useViewportWidth } from "@hooks/useViewportWidth";
import type { Group } from "three";

export const Level: FC = () => {
  const { dispatch, level } = useMothContext();
  const width = useViewportWidth();
  const height = HEIGHT;

  useSpawn();

  const resolveRef = (instance: Group) => {
    if (instance && !level) {
      dispatch({
        type: "add-level",
        value: instance,
      });
    }
  };

  return (
    <group ref={resolveRef}>
      <Level0 width={width} height={height} />
      <Enemies />
    </group>
  );
};
