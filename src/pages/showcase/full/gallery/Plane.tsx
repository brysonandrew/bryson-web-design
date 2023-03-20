import { forwardRef, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "./effects/CustomMaterial";
import { useBlock } from "./block/useBlock";
import { useContext } from "./state/Context";
import type { Texture } from "three";
import { MathUtils, LinearFilter } from "three";

type TMaterialConfig = {
  scale: number;
  shift: number;
};

const MATERIAL_CONFIG: TMaterialConfig = {
  scale: 0,
  shift: 0,
};

type TProps = {
  color?: string;
  shift?: number;
  opacity?: number;
  aspect: number;
  scale: [number, number, number];
  frustumCulled: boolean;
  args: [w: number, h: number, segX: number, segY: number];
  map: Texture;
};
export const Plane = forwardRef<THREE.Mesh, TProps>(
  (
    {
      color = "gray",
      shift = 100,
      opacity = 1,
      args,
      map,
      ...props
    },
    ref,
  ) => {
    const { viewportWidth, offsetFactor } = useBlock();
    const { posRef, pageCount } = useContext();

    const material =
      useRef<TMaterialConfig>(MATERIAL_CONFIG);

    let last: number = posRef.current.top;
    useFrame(() => {
      if (material.current) {
        material.current.scale = MathUtils.lerp(
          material.current.scale,
          offsetFactor -
            posRef.current.top /
              (pageCount * viewportWidth),
          0.1,
        );
        material.current.shift = MathUtils.lerp(
          material.current.shift,
          -(posRef.current.top - last) / shift,
          0.1,
        );
        last = posRef.current.top;
      }
    });
    return (
      <mesh ref={ref} {...props}>
        <planeGeometry args={args} />
        <customMaterial
          ref={material}
          color={color}
          map={map}
          mapMinFilter={LinearFilter}
          transparent
          opacity={opacity}
        />
      </mesh>
    );
  },
);
