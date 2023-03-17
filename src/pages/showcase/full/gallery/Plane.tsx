import * as THREE from "three";
import { forwardRef, useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import "./effects/CustomMaterial";
import { useBlock } from "./block/useBlock";
import { CustomMaterial } from "./effects/CustomMaterial";
import { useContext } from "./state/Context";

extend({ CustomMaterial });

type TProps = {
  color?: string;
  shift: number;
  aspect: number;
  opacity?: number;
  scale: [number, number, number];
  frustumCulled: boolean;
  args: any;
  map: any;
};
export const Plane = forwardRef<THREE.Mesh, TProps>(
  (
    {
      color = "white",
      shift = 100,
      opacity = 1,
      args,
      map,
      ...props
    },
    ref,
  ) => {
    const { viewportWidth, offsetFactor } = useBlock();
    const { items, posRef } = useContext();

    const material = useRef<{
      scale: number;
      shift: number;
    } | null>(null);
    let last: number = posRef.current.top ?? 0;
    useFrame(() => {
      if (material.current) {
        material.current.scale = THREE.MathUtils.lerp(
          material.current.scale,
          offsetFactor -
            (posRef.current.top ?? 0) /
              ((items.length - 1) * viewportWidth),
          0.1,
        );
        material.current.shift = THREE.MathUtils.lerp(
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
          map-minFilter={THREE.LinearFilter}
          transparent
          opacity={opacity}
        />
      </mesh>
    );
  },
);
