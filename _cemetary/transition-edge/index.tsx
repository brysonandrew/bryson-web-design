import type { FC } from "react";
import { BackgroundCircleClip } from "./BackgroundCircleClip";

export const TransitionEdge: FC<Omit<any, "key"> & any> = ({
  id,
  backgroundStyle,
  isTarget,
  reset,
}) => <BackgroundCircleClip id={id} {...backgroundStyle} isTarget={isTarget} />;
