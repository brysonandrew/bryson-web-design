import { Fragment } from "react";
import { TRACKS } from "./constants";
import { useStylesAlbumCover } from "./useStylesAlbumCover";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Item = styled(motion.li)``;
const Text = styled(motion.p)``;

export const AlbumCover = () => {
  useStylesAlbumCover();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <ul>
        {TRACKS.map((name) => (
          <Fragment key={name}>
            <Item className="py-1" />
            <Item className="px-4 py-2">
              <Text
                className="uppercase text-sm"
                style={{ letterSpacing: 8 }}
              >
                {name}
              </Text>
            </Item>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
