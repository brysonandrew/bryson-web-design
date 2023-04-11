import type { FC } from "react";
import styled from "@emotion/styled";
import { Button } from "./Button";
import type { TRecorderState } from "../recorder/config";
import type { TSpeechState } from "../settings/config";
import { RecorderIcon } from "../recorder/RecorderIcon";
import { Pause } from "@moth-components/icons/Pause";
import { Play } from "@moth-components/icons/Play";
import { Stop } from "@moth-components/icons/Stop";
import { Quotes } from "@moth-components/icons/Quotes";

const Root = styled.header``;

type TProps = {
  recorderState: TRecorderState;
  speechState: TSpeechState;
  play: () => void;
  pause: () => void;
  cancel: () => void;
  random: () => void;
};
export const Header: FC<TProps> = ({
  recorderState,
  speechState: {
    isPaused: isSpeechPaused,
    isPlaying,
    isPending,
  },
  play,
  pause,
  cancel,
  random,
}) => (
  <Root className="flex justify-between items-baseline">
    <div className="relative flex items-center">
      <>
        {recorderState.variant && (
          <RecorderIcon
            key="RecordingIcon"
            variant={recorderState.variant}
          />
        )}
      </>
      <>
        {((isSpeechPaused && isPlaying) || !isPlaying) && (
          <Button
            onTap={play}
            disabled={isPending}
            icon={<Play />}
          >
            {isSpeechPaused ? "resume" : "speak"}
          </Button>
        )}
        {isPlaying && !isSpeechPaused && (
          <Button
            onTap={pause}
            disabled={isPending}
            icon={<Pause />}
          >
            pause
          </Button>
        )}
      </>
      <>
        {(isPending || isPlaying) && !isSpeechPaused && (
          <>
            <div className="p-1" />
            <Button onTap={cancel} icon={<Stop />}>
              stop
            </Button>
          </>
        )}
      </>
      {isPending && <div>pending ...</div>}
    </div>
    <Button onTap={random} icon={<Quotes />}>
      generate
    </Button>
  </Root>
);
