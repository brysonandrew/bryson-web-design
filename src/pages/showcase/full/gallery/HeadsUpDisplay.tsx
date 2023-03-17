import { FC, useState } from "react";
import {
  useFrame,
  useThree,
  createPortal,
} from "@react-three/fiber";
import * as THREE from "three";

type TProps = {
  children: any;
};
export const HeadsUpDisplay: FC<TProps> = ({
  children,
}) => {
  const [scene] = useState(() => new THREE.Scene());
  const { gl, camera } = useThree();
  
  useFrame(
    () => {
      gl.autoClear = false;
      gl.clearDepth();
      gl.render(scene, camera);
    },
    2,
  );
  return createPortal(children, scene);
};
