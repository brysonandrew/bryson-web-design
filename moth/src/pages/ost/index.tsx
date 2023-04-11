import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Item } from "./Item";
import { TRACKS } from "./constants";
import { useTracks } from "./useTracks";
import type { TTrackKey } from "./types";
import { useStyles } from "@moth-hooks/useStyles";
import { useMothContext } from "@moth-state/Context";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Ost = () => {
  const { context } = useMothContext();
  useStyles();

  const [nowPlaying, setPlay] = useState<TTrackKey | null>(
    null,
  );

  const handlePlay = (name?: TTrackKey) => {
    if (typeof name === "string") {
      setPlay(name);
    } else {
      setPlay(null);
    }
  };

  const tracks = useTracks();

  const handleTap = (name: TTrackKey) => {
    if (typeof nowPlaying === "string") {
      tracks[nowPlaying].stop.bind(context);
      setPlay(null);
    } else {
      handlePlay(name);
      switch (name) {
        case "jiri-prozniak": {
          tracks["jiri-prozniak"].play();
          break;
        }
        case "erick-hayden": {
          tracks["erick-hayden"].play();
          break;
        }
        case "super-power": {
          tracks["super-power"].play();
          break;
        }
        case "wind-race": {
          tracks["wind-race"].play();
          break;
        }
        case "rhynchocephalia": {
          tracks.rhynchocephalia.play();
          break;
        }
        case "velociraptor": {
          tracks.velociraptor.play();
          break;
        }
        case "eukaryotchii": {
          tracks.eukaryotchii.play();
          break;
        }
        case "brachyurazoa": {
          tracks.brachyurazoa.play();
          break;
        }
        case "cordyceptaera": {
          tracks.cordyceptaera.play();
          break;
        }
        case "nautilus": {
          tracks.nautilus.play();
          break;
        }
        case "waste": {
          tracks.waste.play();
          break;
        }
        case "demons": {
          tracks.demons.play();
          break;
        }
        default: {
          tracks.koolasuchas.play();
        }
      }
    }
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
