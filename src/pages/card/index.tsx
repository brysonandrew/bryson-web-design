import { SIZE } from "./constants";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useStyles } from "@styles/useStyles";
import { Sub } from "@components/text/Sub";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import { GlitchPorsalin } from "@components/text/main/glitch-porsalin";
import { Background } from "@components/background";

const Root = styled(motion.div)``;
const _Card = styled(motion.div)``;

export const Card = () => {
  useStyles();
  return (
    <Root className="flex items-center justify-center w-screen h-screen">
      <_Card
        className="flex flex-col justify-around bg-black"
        style={{ ...SIZE }}
      >
        <Background/>
        <div className="flex flex-col items-center">
          <GlitchPorsalin style={{ fontSize: 72 }}>
            dev brysona
          </GlitchPorsalin>
          <div className="p-1" />
          <Sub
            style={{
              fontSize: 42,
              color: "white",
            }}
          >
            {EXPERIENCE_SLOGAN}
          </Sub>
        </div>
        <div className="flex flex-col items-center h-8">
          <div className="flex items-center justify-around w-full">
            <h3>brysona.dev</h3>
            <h6>021 412 9999</h6>
          </div>
        </div>
      </_Card>
    </Root>
  );
};
