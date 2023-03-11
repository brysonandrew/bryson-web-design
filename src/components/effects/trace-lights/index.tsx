import type { FC } from "react";
import type { TFilterChildrenProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";
import { Filter } from "./Filter";
import { MotionValue, motion } from "framer-motion";

export const ID = "LightingId";

type TProps = {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
};
export const TraceLights: FC<
  TFilterChildrenProps<typeof ID> & TProps
> = ({ children, external, cursorX, cursorY }) => (
  <>
    <motion.filter
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
    </motion.filter>
    {external ? external(ID) : null}
  </>
);
