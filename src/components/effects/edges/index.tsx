import type { FC } from "react";
import { HEIGHT, WIDTH } from "../constants";
import type { TFilterChildrenProps } from "../types";
import { Filter } from "./Filter";
import COLORS from "@windi/config-colors.json";

export const ID = "EdgesId";
type TProps = TFilterChildrenProps<typeof ID> & {
  id?: string;
  color?: keyof typeof COLORS;
};
export const Edges: FC<TProps> = ({
  id = ID,
  color,
  external,
  children,
}) => {
  return (
    <>
      <filter
        id={id}
        x={0}
        y={0}
        height={HEIGHT}
        width={WIDTH}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <Filter id={id} source="SourceGraphic" />
        {children && children(ID)}
      </filter>
      {external && external(ID)}
    </>
  );
};
