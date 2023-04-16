import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { useEnemyRef } from "@moth-components/enemies/useEnemyRef";
import { Body } from "./Body";
import { Kill } from "./Kill";

type TProps = TSpawn;
export const MiteI: FC<TProps> = (props) => {
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
