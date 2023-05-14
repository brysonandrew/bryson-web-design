import type { FC } from "react";
import { HEIGHT, WIDTH } from "../constants";
import type { TFilterChildrenProps } from "../types";
import { Filter } from "./Filter";
import type COLORS from "@windi/config-colors.json";

export const ID = "EdgesId";
type TProps = TFilterChildrenProps & {
  id?: string;
  color?: keyof typeof COLORS;
};
export const Edges: FC<TProps> = ({
  id = ID,
  color,
  external,
  children,
}) => (
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
