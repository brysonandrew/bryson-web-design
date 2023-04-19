import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { Body } from "./body";
import { Kill } from "./Kill";
import { useEnemyRef } from "@moth-components/enemies/useEnemyRef";
import { SIZE_X, SIZE_X_05 } from "./constants";
import { useMovement } from "@moth-hooks/movement/useMovement";

type TProps = TSpawn;
export const LighthouseCaptain: FC<TProps> = (props) => {
  const { resolveRef, source } = useEnemyRef(props);
  useMovement(source);

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
                  source.instance.position.x -
                  SIZE_X_05 +
                  index * SIZE_X,
              }}
            />
          ))}
        </>
      )}
    </group>
  );
};
