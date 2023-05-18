import { Desk } from "@components/icons/Desk";
import { Sub } from "@components/text/Sub";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ICON_SIZE = {
  width: 60,
  height: 60,
};

const Root = styled(motion.div)``;

export const Title = () => (
  <Root className="flex items-center justify-center text-white-dark">
    <div className="-mt-2.25">
      <Desk {...ICON_SIZE} />
    </div>
    <div className="p-1.5" />
    <div className="flex flex-col items-center whitespace-nowrap">
      <h1 style={{ fontSize: 26, lineHeight: 1 }}>
        Andrew Bryson
      </h1>
      <div className="p-1" />
      <Sub
        className="whitespace-nowrap"
        style={{
          fontSize: 12,
          textTransform: "uppercase",
        }}
      >
        Front-end web development
      </Sub>
    </div>
  </Root>
);
