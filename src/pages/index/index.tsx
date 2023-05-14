import { Line } from "@components/Line";
import { Shell } from "@components/Shell";
import { Space2 } from "@components/spaces/Space2";
import { Space24 } from "@components/spaces/Space24";
import { Space4 } from "@components/spaces/Space4";
import { Space48 } from "@components/spaces/Space48";
import { Space8 } from "@components/spaces/Space8";
import { Shell as MainShell } from "@main/Shell";
import { Suspense } from "react";
import { Intro } from "./Intro";
import { Clients } from "./clients";
import { Ending } from "./ending";
import { Mugshot } from "./mugshot";
import { Reviews } from "./reviews";
import { Tech } from "./tech";
import { Space6 } from "@components/spaces/Space6";
import { Space16 } from "@components/spaces/Space16";

export const Index = () => (
  <Suspense fallback={null}>
    <MainShell>
      <Shell>
        <Space2/>
        <Intro />
        <Mugshot />
        <Space4 /> 
        <Tech />
        <Space8 />
        <Line position="relative" />
        <Space6 />
        <Clients />
        <Space6 /> 
        <Line position="relative" />
        <Space6 />
        <Reviews />
        <Space6 /> 
        <Line position="relative" />
        <Space16 />
        <Ending />
        <Space48 />
      </Shell>
    </MainShell>
  </Suspense>
);
