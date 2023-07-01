import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Item } from "../ui/Item";
import { TRACKS } from "./constants";
import type { TTrackHypeKey } from "./types";
import { useSwitchTracks } from "./switch";
import { useMothContext } from "@moth/state/Context";
import { useKey } from "@hooks/useKey";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Hype = () => {
  const { context } = useMothContext();
  const [nowPlaying, setPlaying] =
    useState<TTrackHypeKey | null>(null);

  const switchTracks = useSwitchTracks();

  const handleTap = async (name: TTrackHypeKey) => {
    if (name === nowPlaying) {
    } else {
      await context.resume();
      switchTracks(name);
      setPlaying(name);
    }
  };

  useKey({
    handlers: {
      onKeyDown: ({ key, repeat }) => {
        if (key === " ") {
          window.location.reload();
          return;
        }
        const name = TRACKS[Number(key) - 1];
        if (!repeat && typeof name !== "undefined") {
          handleTap(name);
          return;
        }
      },
    },
    isActive: true,
  });

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
