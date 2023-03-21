import type {
  ReflectorProps} from "@react-three/drei";
import {
  Reflector,
  useTexture,
  useAspect,
} from "@react-three/drei";
import sample1 from "./SurfaceImperfections003_1K_var1.jpeg";
import sample2 from "./SurfaceImperfections003_1K_Normal.jpeg";
import { W, H } from "../constants";
import { useRef } from "react";
import type { Mesh, PlaneGeometry } from "three";
import type { MeshReflectorMaterial } from "@react-three/drei/materials/MeshReflectorMaterial";

type TReflectivePlaneProps = ReflectorProps;
export const ReflectivePlane = (
  props: TReflectivePlaneProps,
) => {
  const ref =
    useRef<Mesh<PlaneGeometry, MeshReflectorMaterial>>(
      null,
    );
  const size = useAspect(W, H);

  const [floor, normal] = useTexture([sample1, sample2]);
  return (
    <>
      {ref.current && (
        <mesh scale={size}>
          <lineSegments>
            <edgesGeometry
              attach="geometry"
              args={[
                (
                  ref.current as Mesh<
                    PlaneGeometry,
                    MeshReflectorMaterial
                  >
                ).geometry,
              ]}
            />
            <lineBasicMaterial
              color="#2130f0"
              attach="material"
            />
          </lineSegments>
        </mesh>
      )}
      <Reflector
        ref={ref}
        scale={size}
        resolution={1024}
        args={[8, 8]}
        {...props}
      >
        {(Material, props) => (
          <Material
            color="#f0f0f0"
            metalness={0}
            roughnessMap={floor}
            normalMap={normal}
            normalScale={[20, 20] as any}
            {...props}
          />
        )}
      </Reflector>
    </>
  );
};
