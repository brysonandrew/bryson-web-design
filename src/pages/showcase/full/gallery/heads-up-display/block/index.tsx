import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import { useBlock, OffsetContext } from "./useBlock";
import { Group, MathUtils } from "three";
import { TChildren } from "@t/index";
import { useContext } from "../../state/Context";

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
  const { posRef, zoom } = useContext();
  const { offset: parentOffset, sectionWidth } = useBlock();
  const ref = useRef<Group | null>(null);
  const offset =
    typeof index !== "undefined" ? index : parentOffset;

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.x = MathUtils.lerp(
      ref.current.position.x,
      (-posRef.current.top / zoom) * factor,
      0.1,
    );
  });

  const x = sectionWidth * offset * factor;

  return (
    <OffsetContext.Provider value={offset}>
      <group {...props} position={[x, 0, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </OffsetContext.Provider>
  );
};
