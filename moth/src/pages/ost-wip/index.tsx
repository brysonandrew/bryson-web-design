import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Item } from "./Item";
import { TRACKS } from "./constants";
import type { TTrackKey } from "./types";
import { useMothContext } from "@moth-state/Context";
import { useSwitchTracks } from "./switch";
import { useStyles } from "@styles/useStyles";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const OstWip = () => {
  const { context } = useMothContext();
  useStyles();
  const [nowPlaying, setPlay] = useState<TTrackKey | null>(
    null,
  );

  const switchTracks = useSwitchTracks();

  const handleTap = (name: TTrackKey) => {
    switchTracks(name);
  };
  return (
    <Root className="flex flex-col items-center w-screen">
      <div className="p-4" />
      <List className="shadow-teal-dark">
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
      </List>
      <div className="p-4" />
    </Root>
  );
};
