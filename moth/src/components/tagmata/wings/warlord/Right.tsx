import type { FC } from "react";
import { Shape } from "@moth-components/shapes/Shape";
import { useShape } from "@moth-hooks/shape/useShape";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";

const PATH =
  "m486 219.3C506 31 432.4 18.7 360.5 58.7c0 0 114.1-27.7 66.1 109.4l-35.8 14.7z";

export const Right: FC<TBaseTagmataProps> = ({
  color,
  ...props
}) => {
  const shape = useShape(PATH);
  if (!shape) return null;
  return <Shape size={512} shape={shape} {...props} />;
};
