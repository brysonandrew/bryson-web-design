import type { FC } from "react";
import type { RouterProps } from "react-router";
import { BrowserRouter as _Router } from "react-router-dom";
import { Source } from "./Source";
import { Background } from "@components/background";
import { Filters } from "./Filters";
import { useDetectGPU } from "@react-three/drei";

type TProps = Partial<RouterProps>;
export const Router: FC<TProps> = () => {
  const { isMobile, tier } = useDetectGPU();
  return (
    <_Router>
      <Filters />
      <Background />
      <Source />
    </_Router>
  );
};
