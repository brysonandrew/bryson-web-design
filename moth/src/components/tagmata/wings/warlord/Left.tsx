import type { FC } from "react";
import { Shape } from "@moth-components/shapes/Shape";
import { useShape } from "@moth-hooks/shape/useShape";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";

const PATH =
  "m25.96 219.3C6 31 79.61 18.7 151.5 58.7c0 0-114.14-27.7-66.12 109.4l35.82 14.7z";

export const Left: FC<TBaseTagmataProps> = ({
  color,
  ...props
}) => {
  const shape = useShape(PATH);
  if (!shape) return null;
  return <Shape size={512} shape={shape} {...props} />;
};
