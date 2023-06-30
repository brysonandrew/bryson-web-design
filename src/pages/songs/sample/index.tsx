import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Item } from "../ui/Item";
import { TRACKS } from "./constants";
import type { TTrackSampleKey } from "./types";
import { useSwitchTracks } from "./switch";
import { useStyles } from "@css/useStyles";
import { useMothContext } from "@moth/state/Context";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Sample = () => {
  useStyles();
  const { context } = useMothContext();
  const [nowPlaying, setPlaying] =
    useState<TTrackSampleKey | null>(null);

  const switchTracks = useSwitchTracks();

  const handleTap = async (name: TTrackSampleKey) => {
    if (name === nowPlaying) {
      //  recorder.stop();
    } else {
      await context.resume();
      //  recorder.start();
      switchTracks(name);
      setPlaying(name);
    }
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
