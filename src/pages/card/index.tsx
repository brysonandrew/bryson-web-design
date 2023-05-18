import styled from "@emotion/styled";
import { useStyles } from "@styles/useStyles";
import { motion } from "framer-motion";
import { Contact } from "./Contact";
import { Title } from "./Title";
import { SIZE } from "./constants";
import { Invert } from "@components/Invert";

const Root = styled(motion.div)``;
const _Card = styled(motion.div)``;

export const Card = () => {
  useStyles();
  return (
    <Invert>
      {(filter) => (
        <Root
          className="flex items-center justify-center w-screen h-screen text-white"
          style={{ filter }}
        >
          <_Card
            className="flex flex-col justify-around bg-black"
            style={{ ...SIZE }}
          >
            <Title />
            <Contact />
          </_Card>
        </Root>
      )}
    </Invert>
  );
};
