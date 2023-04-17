import styled from "@emotion/styled";
import { MOTH_NAME } from "@moth-constants/index";
import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { Hud } from "../../../components/hud";
import { Level } from "../../../components/level";
import { Moth } from "../../../components/moth";
import { GameOver } from "./GameOver";
import { Shell } from "./Shell";

const Root = styled.div``;

export const Main: FC = () => {
  const { killRecord } = useMothContext();
  return (
    <Root className="w-screen h-screen">
      <>
        {killRecord[MOTH_NAME] ? (
          <GameOver />
        ) : (
          <Shell>
            <Level />
            <Moth /> 
            <Hud />
          </Shell>
        )}
      </>
    </Root>
  );
};
