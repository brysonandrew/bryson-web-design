import { Line } from "@components/Line";
import { Shell } from "@components/Shell";
import { Space2 } from "@components/spaces/Space2";
import { Space48 } from "@components/spaces/Space48";
import { Space8 } from "@components/spaces/Space8";
import { Shell as MainShell } from "@main/Shell";
import { Suspense } from "react";
import { Intro } from "./intro";
import { Build } from "./build";
import { Ending } from "./ending";
import { Space6 } from "@components/spaces/Space6";
import { Space12 } from "@components/spaces/Space12";
import { Clients } from "./clients";
import { Background } from "@components/background";
import { Space24 } from "@components/spaces/Space24";

export const Index = () => (
  <Suspense fallback={null}>
    <MainShell>
      <Shell>
        <Space2 />
        <Intro /> 
        <Space8 />
        <Line />
        <Space6 />
        <Build />
        <Space6 />
        <Line />
        <Space6 />
        <Clients />
        <Space6 />
        <Line />
        <Space12 />
        <Ending />
        <Space24 />
      </Shell>
    </MainShell>
  </Suspense>
);
