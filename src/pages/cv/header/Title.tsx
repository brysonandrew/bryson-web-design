import { Sub } from "@components/text/Sub";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;

export const Title = () => (
  <Root className="flex items-center justify-center text-white-dark">
    <div className="flex flex-col items-center whitespace-nowrap">
      <h2 style={{ fontSize: 36, lineHeight: 1 }}>
        Andrew Bryson
      </h2>
      <Sub
        className="whitespace-nowrap"
        style={{
          fontSize: 17,
          textTransform: "uppercase",
        }}
      >
        Front-end web developer
      </Sub>
    </div>
  </Root>
);
