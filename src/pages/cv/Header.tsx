import { Desk } from "@components/icons/Desk";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import { Sub } from "@components/text/Sub";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ICON_SIZE = {
  width: 80,
  height: 80,
};

const Root = styled(motion.header)``;

export const Header = () => (
    <Root className="flex items-center justify-center">
      <div className="-mt-4">
        <Desk {...ICON_SIZE} />
      </div>
      <div className="p-2" />
      <div className="flex flex-col items-center">
        <h1 style={{ fontSize: 40, lineHeight: 1 }}>
          Andrew Bryson
        </h1>
        <div className="p-1" />
        <Sub
          style={{
            fontSize: 18,
            color: "white",
            textTransform: "uppercase"
          }}
        >
          Front-end web development
        </Sub>
      </div>
    </Root>
  );
