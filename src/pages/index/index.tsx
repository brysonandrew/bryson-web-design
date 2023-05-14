import { Space16 } from "@components/spaces/Space16";
import { Space2 } from "@components/spaces/Space2";
import { Space3 } from "@components/spaces/Space3";
import { Space4 } from "@components/spaces/Space4";
import { Intro } from "./Intro";
import { Clients } from "./clients";
import { Ending } from "./ending";
import { Mugshot } from "./mugshot";
import { Reviews } from "./reviews";
import { Tech } from "./tech";
import { Shell } from "@components/Shell";
import { Shell as MainShell } from "@main/Shell";

import { Suspense } from "react";
import { Line } from "@components/Line";
import { Space6 } from "@components/spaces/Space6";
import { Space32 } from "@components/spaces/Space32";

export const Index = () => (
  <Suspense fallback={null}>
    <MainShell> 
      <Shell>
        <Intro />
        <Mugshot />
        <Space2 />
        <Tech />
        <Space6 /> 
        <Line />
        <Space6 />
        <Clients />
        <Space6 />
        <Line />
        <Space6 />
        <Reviews />
        <Space6 />
        <Line />
        <Space6 />
        <Ending />
        <Space32 />
      </Shell>
    </MainShell>
  </Suspense>
);
