import { Bloom } from "@react-three/postprocessing";
import { KernelSize } from "../godrays";

export const BloomPass = () => (
  <Bloom
    kernelSize={KernelSize.HUGE}
    luminanceThreshold={0}
    luminanceSmoothing={0}
    intensity={0.5}
  />
);
