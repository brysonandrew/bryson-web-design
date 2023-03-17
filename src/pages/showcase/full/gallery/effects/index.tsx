import * as THREE from "three";
import {
  useEffect,
  useRef,
  useState,
  FC,
  MutableRefObject,
} from "react";
import {
  extend,
  useFrame,
  useThree,
  createPortal,
} from "@react-three/fiber";
import { Resolution, KernelSize } from "postprocessing";
// import {
//   EffectComposer,
//   ShaderPass,
//   RenderPass,
//   UnrealBloomPass,
//   FilmPass,
// } from "three-stdlib";
// import {
//   EffectComposer,
//   Outline,
//   SelectiveBloom,
// } from "@react-three/postprocessing";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
// import { WaterPass } from "./WaterPass";
// import { EffectPass } from "./EffectPass";
import { TChildren } from "@t/index";

const BIAS = 0.001;

extend({
  EffectComposer,
  // ShaderPass,
  // RenderPass,
  // WaterPass,
  // UnrealBloomPass,
  // FilmPass,
  // EffectPass,
});
type TProps = { children: TChildren };
export const Effects: FC<TProps> = ({ children }) => {
  const [scene] = useState(() => new THREE.Scene());
  // const composer = useRef<any | null>(null);
  // const effect = useRef<any | null>(null);
  // const water = useRef<any | null>(null);
  // const bloom = useRef<any | null>(null);
  // const { gl, size } = useThree();
  // if (!state.top.current) {
  //   state.top.current = 0;
  // }
  // let last: number = state.top.current;
  // useEffect(() => {
  //   if (composer.current) {
  //     void composer.current.setSize(
  //       size.width,
  //       size.height,
  //     );
  //   }
  // }, [size]);

  // useFrame(() => {
  //   const { top } = state;
  //   effect.current.factor = THREE.MathUtils.lerp(
  //     effect.current.factor,
  //     (top.current - last) / -30,
  //     0.1,
  //   );
  //   bloom.current.strength = THREE.MathUtils.lerp(
  //     bloom.current.strength,
  //     Math.abs((top.current - last) / 200),
  //     0.1,
  //   );
  //   water.current.factor = THREE.MathUtils.lerp(
  //     water.current.factor,
  //     Math.abs((top.current - last) / 30),
  //     0.1,
  //   );
  //   last = top.current;
  //   gl.autoClear = true;
  //   composer.current.render();
  // }, 1);

  // const pointlightRef: MutableRefObject<THREE.PointLight | null> =
  //   useRef<THREE.PointLight | null>(null);
  // const pointlight1Ref: MutableRefObject<THREE.PointLight | null> =
  //   useRef<THREE.PointLight | null>(null);
  // const pointlight2Ref: MutableRefObject<THREE.PointLight | null> =
  //   useRef<THREE.PointLight | null>(null);

  // const uiRef = useRef<any | null>(null);
  // const noiseRef = useRef<any | null>(null);
  // const graphicsRef = useRef<any | null>(null);
  // const mountedRef = useRef<any | null>(false);

  // useEffect(() => {
  //   if (!mountedRef.current) {
  //     mountedRef.current = true;
  //   }
  //   if (
  //     pointlightRef.current &&
  //     pointlight1Ref.current &&
  //     pointlight2Ref.current
  //   ) {
  //     pointlight2Ref.current.shadow.normalBias = BIAS;
  //     pointlight2Ref.current.shadow.bias = -BIAS;
  //     pointlight1Ref.current.shadow.normalBias = BIAS;
  //     pointlight1Ref.current.shadow.bias = -BIAS;
  //     pointlightRef.current.shadow.normalBias = BIAS;
  //     pointlightRef.current.shadow.bias = -BIAS;
  //   }
  //   return () => {
  //     if (mountedRef.current) {
  //       mountedRef.current = true;
  //     }
  //   };
  // }, []);
  return createPortal(
    <>
      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        /> */}
        <Noise opacity={0.02} />
        <Vignette
          eskil={false}
          offset={0.1}
          darkness={1.1}
        />
        {/* <EffectComposer autoClear={false}>
        <Outline blur edgeStrength={1} xRay />
        <SelectiveBloom
          lights={[
            pointlightRef.current,
            pointlight1Ref.current,
            pointlight2Ref.current,
          ]}
          selection={[
            uiRef.current,
            noiseRef.current,
            graphicsRef.current,
          ]}
          intensity={2.0}
          luminanceThreshold={0.01}
          luminanceSmoothing={0.025}
          width={Resolution.AUTO_SIZE} // render width
          height={Resolution.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size: ;
        /> */}
      </EffectComposer>
      {/* <renderPass
          attachArray="passes"
          scene={scene}
          camera={camera}
        />
        <unrealBloomPass
          attachArray="passes"
          ref={bloom}
          args={[undefined, 0.0, 1, 0.0]}
        />
        <effectPass attachArray="passes" ref={effect} />
        <waterPass attachArray="passes" ref={water} /> */}
      {children}
    </>,
    scene,
  );
};
