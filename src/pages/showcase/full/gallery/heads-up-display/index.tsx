import { FC, useState } from "react";
import {
  useFrame,
  useThree,
  createPortal,
} from "@react-three/fiber";
import { Marker } from "../Marker";
import { DotMap } from "./DotMap";
import { Scene } from "three";

export const HeadsUpDisplay: FC = () => {
  const [scene] = useState(() => new Scene());
  const { gl, camera } = useThree();

  useFrame(() => {
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(scene, camera);
  }, 2);

  return createPortal(
    <>
      <DotMap />
      <Marker />
    </>,
    scene,
  );
};
