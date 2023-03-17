import { useFrame } from "@react-three/fiber";
import { FC, createContext, useRef } from "react";
import { useBlock } from "./useBlock";
import { PositionPoint } from "@react-three/drei";
import { MathUtils } from "three";
import { TChildren } from "@t/index";
import { useContext } from "../state/Context";

type TProps = {
  factor: number;
  index: number;
  children: TChildren;
};
export const Block: FC<TProps> = ({
  children,
  index,
  factor,
  ...props
}) => {
  const { parentOffset, sectionWidth, offsetFactor } =
    useBlock();
    const { posRef, zoom } = useContext();
 
  const ref = useRef<PositionPoint | null>(null);
  const offset =
    typeof index !== "undefined" ? index : parentOffset;
  useFrame(() => {
    if (ref.current) {
      const currY = ref.current.position.x;
      const currTop: number = posRef.current.top ?? 0;
      ref.current.position.x = MathUtils.lerp(
        currY,
        (-currTop / zoom) * factor,
        0.1,
      );
    }
  });
  return (
    <group
      {...props}
      position={[
        sectionWidth * offset * offsetFactor,
        0,
        0,
      ]}
    >
      <group ref={ref}>{children}</group>
    </group>
  );
};
