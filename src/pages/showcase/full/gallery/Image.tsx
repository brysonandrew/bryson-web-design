import { Shadow, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Plane } from "./Plane";
import { useBlock } from "./block/useBlock";
import { Group } from "three";
import { useContext } from "./state/Context";

export const Image = ({ img, index }: any) => {
  const ref = useRef<Group | null>(null);
  const { posRef, items } = useContext();
  const count = items.length;
  const {
    contentMaxWidth: w,
    viewportWidth,
    offsetFactor,
  } = useBlock();
  useFrame(() => {
    const scrollOffset =
      posRef.current.top /
        (viewportWidth * count - viewportWidth) +
      1 / count / 2;
    const scale =
      1 -
      (offsetFactor - scrollOffset) *
        (offsetFactor > scrollOffset ? 1 : -1);
    if (ref.current) {
      ref.current.scale.setScalar(scale);
    }
  });
  return (
    <group ref={ref}>
      <Plane
        map={img}
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
