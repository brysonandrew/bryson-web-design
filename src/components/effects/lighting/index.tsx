import type { FC } from "react";
import type { TFilterChildrenProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";
import { Filter } from "./Filter";
import type { MotionValue} from "framer-motion";

export const ID = "LightingId";

type TProps = {
  cursorX?: MotionValue<number>;
  cursorY?: MotionValue<number>;
};
export const Lighting: FC<
  TFilterChildrenProps & TProps
> = ({ children, external, cursorX, cursorY }) => (
  <>
    <filter
      id={ID}
      x={0}
      y={0}
      height={HEIGHT}
      width={WIDTH}
      filterUnits="userSpaceOnUse"
    >
      <Filter
        id={ID}
        source="SourceGraphic"
        cursorX={cursorX}
        cursorY={cursorY}
      />
      {children ? children(ID) : null}
    </filter>
    {external ? external(ID) : null}
  </>
);
