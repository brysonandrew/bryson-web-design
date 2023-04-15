import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { Body } from "./Body";
import { Kill } from "./Kill";
import { useEnemyRef } from "../useEnemyRef";

type TProps = TSpawn;
export const RiverHorse: FC<TProps> = (props) => {
  const { resolveRef, source } = useEnemyRef(props);
  return (
    <group>
      <group ref={resolveRef}>
        <Body />
      </group>
      {source && (
        <>
          {[...Array(12)].map((_, index) => (
            <Kill
              key={`kill-${index}`}
              source={{
                ...source,
                offsetX: source.x + index * 4,
              }}
            />
          ))}
        </>
      )}
    </group>
  );
};
