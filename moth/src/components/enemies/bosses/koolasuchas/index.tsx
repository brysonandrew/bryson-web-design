import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { Body } from "./body";
import { Kill } from "./Kill";
import { useEnemyRef } from "@moth-components/enemies/useEnemyRef";

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
          {[...Array(2)].map((_, index) => (
            <Kill
              key={`kill-${index}`}
              source={{
                ...source,
                offsetX:
                  source.x +
                  index * 2
                  // BODY_SIZE_X -
                  // BODY_SIZE_X_05,
              }}
            />
          ))}
        </>
      )}
    </group>
  );
};
