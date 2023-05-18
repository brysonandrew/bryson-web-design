import { SIZE } from "./constants";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useStyles } from "@styles/useStyles";
import { Sub } from "@components/text/Sub";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import { Background } from "@components/background";
import { Desk } from "@components/icons/Desk";

const ICON_SIZE = {
  width: 120,
  height: 120,
};

const Root = styled(motion.div)``;
const _Card = styled(motion.div)``;

export const Card = () => {
  useStyles();
  return (
    <Root className="flex items-center justify-center w-screen h-screen text-white">
      <_Card
        className="flex flex-col justify-around bg-black"
        style={{ ...SIZE }}
      >
        <Background />
        <div className="flex items-center justify-center">
          <div className="-mt-4">
            <Desk {...ICON_SIZE} />
          </div>
          <div className="p-2" />
          <div className="flex flex-col items-center">
            <h1 style={{ fontSize: 50, lineHeight: 1 }}>
              Andrew Bryson
            </h1>
            <div className="p-0.5" />
            <Sub
              style={{
                fontSize: 42,
                color: "white",
              }}
            >
              {EXPERIENCE_SLOGAN}
            </Sub>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-around w-full text-xl">
            <div>
              <p>brysona.dev</p>
              <p>020 4069 8339</p>
            </div>
            <div className="flex flex-col items-end">
              <p>andrewbryson12</p>
              <p>@gmail.com</p>
            </div>
          </div>
        </div>
      </_Card>
    </Root>
  );
};
