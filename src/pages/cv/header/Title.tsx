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
    <div className="-mt-3">
      <Desk {...ICON_SIZE} />
    </div>
    <div className="p-1.5" />
    <div className="flex flex-col items-center whitespace-nowrap">
      <h1 style={{ fontSize: 29, lineHeight: 1 }}>
        Andrew Bryson
      </h1>
      <Sub
        className="whitespace-nowrap"
        style={{
          fontSize: 15,
          textTransform: "uppercase",
        }}
      >
        Front-end web development
      </Sub>
    </div>
  </Root>
);
