import { Shadow, Text } from "@react-three/drei";
import { FC, useRef } from "react";
import { Plane } from "../Plane";
import { useBlock } from "../block/useBlock";
import { Group, Texture } from "three";
import { useContext } from "../state/Context";
import { useFrame } from "@react-three/fiber";

type TProps = {
  index: number;
  texture: Texture;
};
export const Image: FC<TProps> = ({ texture, index }) => {
  const ref = useRef<Group | null>(null);
  const { posRef, pageCount, count } = useContext();
  const {
    contentMaxWidth: w,
    viewportWidth,
    offsetFactor,
  } = useBlock();

  useFrame(() => {
    if (!ref.current) return;
    const scrollOffset =
      posRef.current.top /
        (viewportWidth * pageCount - viewportWidth) +
      1 / pageCount / 2;
    const n =
      (offsetFactor - scrollOffset) *
      (offsetFactor > scrollOffset ? 1 : -1);
    const scale =
      Math.sin(
        n * Math.PI * 2 * pageCount + Math.PI * 0.5,
      ) * 0.075 + 0.5;

    console.log(scale);
    ref.current.scale.setScalar(scale);
  });

  return (
    <group ref={ref}>
      <Plane
        map={texture}
        args={[1, 1, 32, 32]}
        shift={100}
        aspect={1.5}
        scale={[w, w / 1.5, 1]}
        frustumCulled={false}
      />
      <Text
        anchorX="left"
        position={[-w / 2, -w / 1.5 / 2 - 0.25, 0]}
        scale={1.5}
        color="white"
      >
        0{index}
      </Text>
      <Shadow
        scale={[w * 1.2, 1, 1]}
        rotation={[0.75, 0, 0]}
        position={[0, -w / 2, 0]}
      />
    </group>
  );
};
