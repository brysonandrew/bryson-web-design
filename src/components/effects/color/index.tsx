import type { FC } from "react";
import COLORS from "@windi/config-colors.json";
import type { TFilterChildrenProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";

export const ID = "COLOR_ID";

type TProps = TFilterChildrenProps & {
  id?: string;
  color?: keyof typeof COLORS;
};
export const Filter: FC<TProps> = ({
  id = ID,
  children,
  external,
  color,
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
      >
        <feFlood
          floodColor={color ?? COLORS["teal-bright"]}
          result="color"
        />
        <feComposite
          in="color"
          in2="SourceGraphic"
          operator="in"
          result="colored-outline"
        />
        <feComposite
          in="colored-outline"
          in2="SourceGraphic"
          operator="lighter"
          result="light"
        />
        {children && children(id)}
      </filter>
      {external && external(id)}
    </>
  )
};
