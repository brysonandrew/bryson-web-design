import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Item } from "./Item";
import { TRACKS } from "./constants";
import type { TTrackKey } from "./types";
import { useSwitchTracks } from "./switch";
import { useStyles } from "@styles/useStyles";
import { useMothContext } from "@moth/state/Context";
import { useRecorder } from "./useRecorder";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const SampleSongs = () => {
  const { context } = useMothContext();
  const handler = useRecorder();
  useStyles();
  const [nowPlaying] = useState<TTrackKey | null>(null);

  const switchTracks = useSwitchTracks();

  const handleTap = async (name: TTrackKey) => {
    await context.resume();
    switchTracks(name);
    handler();
  };

  return (
    <Root className="flex flex-col items-center w-screen">
      <div className="p-4" />
      <div className="p-4" />
      <div className="p-4" />
      <List className="shadow-teal-dark">
        <AnimatePresence>
          {TRACKS.map((name, index) => (
            <Fragment key={name}>
              {index !== 0 && <li className="py-1" />}
              <Item
                name={name}
                isPlaying={name === nowPlaying}
                onTap={() => handleTap(name)}
              />
            </Fragment>
          ))}
        </AnimatePresence>
      </List>
      <div className="p-4" />
    </Root>
  );
};
