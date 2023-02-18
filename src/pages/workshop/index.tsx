import { BottomPanel } from "@components/kalimba-templates/BottomPanel";
import { TopPanel } from "@components/kalimba-templates/TopPanel";
import styled from "@emotion/styled";
const Root = styled.div``;
export const Workshop = () => (
  <Root className="w-screen h-screen">
    <TopPanel />
    <div />
    <BottomPanel />
  </Root>
);
