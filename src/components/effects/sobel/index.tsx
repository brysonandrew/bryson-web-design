import type { FC } from "react";
import { HEIGHT, WIDTH } from "../constants";
import type { TFilterChildrenProps } from "../types";
import { Filter } from "./Filter";

export const ID = "SobelId";

export const Sobel: FC<TFilterChildrenProps<typeof ID>> = ({
  children,
  external,
}) => (
  <>
    <filter
      id={ID}
      x={0}
      y={0}
      height={HEIGHT}
      width={WIDTH}
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <Filter id={ID} source="SourceGraphic" />
      {children && children(ID)}
    </filter>
    {external && external(ID)}
  </>
);
