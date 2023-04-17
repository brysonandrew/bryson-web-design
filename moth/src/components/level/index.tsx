import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { useSpawn } from "../../hooks/spawn/useSpawn";
import type { Group } from "three";
import { Switch } from "./Switch";

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
      <Switch />
    </group>
  );
};
