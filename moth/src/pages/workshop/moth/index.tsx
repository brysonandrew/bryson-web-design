import styled from "@emotion/styled";
import { Moth as _Moth } from "@moth-components/moth";
import { Shell } from "@moth-pages/index/main/Shell";
import { MothProvider } from "@moth-state/Provider";
import { MapControls } from "@react-three/drei";

const Root = styled.div``;

export const Moth = () => (
  <MothProvider>
    <Root className="w-screen h-screen">
      <Shell>
        <MapControls />
        <_Moth />
      </Shell>
    </Root>
  </MothProvider>
);
