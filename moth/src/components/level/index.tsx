import { HEIGHT } from "@moth-constants/index";
import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { Level0 } from "./0";
import { Enemies } from "../enemies";
import { useSpawn } from "../../hooks/spawn/useSpawn";
import type { Group } from "three";

export const Level: FC = () => {
  const { dispatch, level } = useMothContext();

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
      <Level0 />
      <Enemies />
    </group>
  );
};
