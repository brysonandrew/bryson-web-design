import type { FC } from "react";
import { WING_LEFT_NAME } from "./config";
import { useShape } from "@moth-hooks/shape/useShape";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";

const WARLORD_LEFT_WING = "m25.96 219.3C6 31 79.61 18.7 151.5 58.7c0 0-114.14-27.7-66.12 109.4l35.82 14.7z"

export const Left: FC<TBaseTagmataProps> = ({
  span = 1,
  color,
  ...props
}) => {
  const path = useShape(WARLORD_LEFT_WING)
  return (
    <mesh name={WING_LEFT_NAME} position-x={-span} {...props}>
      <circleGeometry args={[2, 4, Math.PI * 0.7, 2]} />
      <meshBasicMaterial transparent color={color} />
    </mesh>
  )
}