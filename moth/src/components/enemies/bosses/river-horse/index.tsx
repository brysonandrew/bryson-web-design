import type { TSpawn } from "@moth-state/types";
import type { FC } from "react";
import { Body } from "./body";
import { Kill } from "./Kill";
import { useEnemyRef } from "@moth-components/enemies/useEnemyRef";
import {
  BODY_SIZE_X,
  BODY_SIZE_X_05,
  WING_SPAN_SCALE,
} from "./constants";

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
                  source.instance.position.x +
                  index * BODY_SIZE_X * WING_SPAN_SCALE -
                  BODY_SIZE_X_05 * WING_SPAN_SCALE,
              }}
            />
          ))}
        </>
      )}
    </group>
  );
};
