import { useFrame } from "@react-three/fiber";
import type { FC} from "react";
import { useRef } from "react";
import { useBlock } from "./useBlock";
import type { Group} from "three";
import { MathUtils } from "three";
import type { TChildren } from "@t/index";
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
    <group {...props} position={[x, 0, 0]}>
      <group ref={ref}>{children}</group>
    </group>
  );
};
