import { extend } from "@react-three/fiber";
import {
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import type { FC } from "react";
import type { Scene } from "three";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";

extend({
  // EffectComposer,
  FilmPass,
  // RenderPass,
  // UnrealBloomPass,
  // WaterPass,
  // EffectPass,
});

type TProps = { scene: Scene };
export const Effects: FC<TProps> = () => (
    <>
      <EffectComposer autoClear>
        <Vignette
          eskil={false}
          darkness={1.4}
          offset={0.4}
        />
      </EffectComposer>
    </>
  );

// const { posRef } = useContext();
// const { gl, size, camera } = useThree();
// const composer = useRef<any | null>(null);
// const effect = useRef<any | null>(null);
// const water = useRef<any | null>(null);
// const bloom = useRef<any | null>(null);
// let last: number = posRef.current.top;
// useEffect(() => {
//   console.log("LOADI");
//   if (composer.current) {
//     console.log("SIZING");
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
{
  /* <Vignette
          eskil={false}
          offset={0.4}
          darkness={1.1}
        /> */
}
{
  /* <effectComposer ref={composer} args={[gl]}>
        <filmPass />
        <renderPass
          attach="passes"
          scene={scene}
          camera={camera}
        />
        <unrealBloomPass
          attach="passes"
          ref={bloom}
          args={[undefined, 0.0, 1, 0.0]}
        />
        <effectPass attach="passes" ref={effect} />
        <waterPass attach="passes" ref={water} />
      </effectComposer>  */
}
