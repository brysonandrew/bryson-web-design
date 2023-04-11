import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { Body } from "./Body";
import { Kill } from "./Kill";
import { useEnemyRef } from "../useEnemyRef";

type TProps = TSpawn;
export const Galamodo: FC<TProps> = (props) => {
  const { resolveRef, source } = useEnemyRef(props);
  return (
    <group>
      <group ref={resolveRef}>
        <Body />
      </group>
      {source && <Kill source={source} />}
    </group>
  );
};
