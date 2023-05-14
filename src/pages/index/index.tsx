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

export const Index = () => (
  <Suspense fallback={null}>
    <MainShell>
      <Shell>
        <Space4 />
        <Intro />
        <Mugshot />
        <Space4 />
        <Tech />
        <Space4 />
        <Line />
        <Space8 />
        <Clients />
        <Line />
        <Space8 />
        <Reviews />
        <Space2 />
        <Line />
        <Space24 />
        <Ending />
        <Space48 />
      </Shell>
    </MainShell>
  </Suspense>
);
