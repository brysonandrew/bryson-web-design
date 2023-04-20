import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { Body } from "./Body";
import { Kill } from "./Kill";
import { useEnemyRef } from "@moth-components/enemies/useEnemyRef";
import { useMovement } from "@moth-hooks/movement/useMovement";

type TProps = TSpawn;
export const Hercules: FC<TProps> = (props) => {
  const { resolveRef, source } = useEnemyRef(props);
  useMovement(source)
  return (
    <group> 
      <group ref={resolveRef}>
        <Body />
      </group>
      {source && <Kill source={source} />}
    </group>
  );
};
