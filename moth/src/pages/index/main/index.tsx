import type { FC } from "react";
import styled from "@emotion/styled";
import { Canvas, extend } from "@react-three/fiber";
import {
  AmbientLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
  PlaneGeometry,
  CircleGeometry,
} from "three";
import { Moth } from "../../../components/moth";
import { Level } from "../../../components/level";
import { useMothContext } from "@moth-state/Context";
import { MOTH_NAME } from "@moth-constants/index";
import { GameOver } from "./GameOver";
import { Hud } from "../../../components/hud";

extend({
  Group,
  AmbientLight,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  CircleGeometry,
});

const Root = styled.div``;

export const Main: FC = () => {
  const { killRecord } = useMothContext();

  return (
    <Root className="w-screen h-screen">
      <>
        {killRecord[MOTH_NAME] ? (
          <GameOver />
        ) : (
          <Canvas
            camera={{
              position: [0, 0, -80],
            }}
          >
            <ambientLight intensity={0.3} />
            <Level />
            <Moth />
            <Hud />
          </Canvas>
        )}
      </>
    </Root>
  );
};
