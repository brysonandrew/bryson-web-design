import { FC, useEffect, useRef } from "react";
import {
  extend,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useContext } from "../state/Context";
import { MathUtils, Scene } from "three";
import {
  // EffectComposer,
  ShaderPass,
  RenderPass,
  UnrealBloomPass,
  FilmPass,
} from "three-stdlib";
import { WaterPass } from "./WaterPass";
import { EffectPass } from "./EffectPass";
import {
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";

extend({
  // EffectComposer,
  ShaderPass,
  RenderPass,
  WaterPass,
  UnrealBloomPass,
  FilmPass,
  EffectPass,
});

type TProps = { scene: Scene };
export const Effects: FC<TProps> = ({ scene }) => {
  const { posRef } = useContext();
  // const { gl, size, camera } = useThree();

  // const composer = useRef<any | null>(null);
  // const effect = useRef<any | null>(null);
  // const water = useRef<any | null>(null);
  // const bloom = useRef<any | null>(null);

  // let last: number = posRef.current.top;
  // useEffect(() => {
  //   if (composer.current) {
  //     void composer.current.setSize(
  //       size.width,
  //       size.height,
  //     );
  //   }
  // }, [size]);

  // useFrame(() => {

  //   if (bloom.current) {
  //     bloom.current.strength = MathUtils.lerp(
  //       bloom.current.strength,
  //       Math.abs((posRef.current.top - last) / 200),
  //       0.1,
  //     );
  //   }

  //   if (water.current) {
  //     water.current.factor = MathUtils.lerp(
  //       water.current.factor,
  //       Math.abs((posRef.current.top - last) / 30),
  //       0.1,
  //     );
  //   }

  //   last = posRef.current.top;
  //   gl.autoClear = true;
  //   composer.current.render();
  // }, 1);

  return (
    <>
      <EffectComposer>
        <Vignette />
      </EffectComposer>
      {/* <effectComposer ref={composer} args={[gl]}>
        <renderPass
          attach="passes"
          scene={scene}
          camera={camera}
        /> */}
      {/* <unrealBloomPass
          attach="passes"
          ref={bloom}
          args={[undefined, 0.0, 1, 0.0]}
        />
        <effectPass attach="passes" ref={effect} />
        <waterPass attach="passes" ref={water} /> */}
      {/* </effectComposer> */}
    </>
  );
};
