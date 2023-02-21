import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { TXY } from "@t/position";
import { Pattern } from "./effects/glitch/Pattern";
import { PATTERN_ID } from "./effects/glitch/config";
import { Spotlight } from "./effects/lighting/Spotlight";
import { SPOTLIGHT_ID } from "./effects/lighting/config";

const Root = styled(motion.svg)``;

type TProps = TXY;
export const Background: FC<TProps> = (props) => (
    <Root
      className="fixed inset-0"
      width="100%"
      height="100%"
    >
      <defs>
        <Pattern />
        <Spotlight {...props} />
      </defs>
      <motion.rect
        x="0"
        y="0" 
        width="100%"
        height="100%"
        fill={`url(#${PATTERN_ID})`}
        filter={`url(#${SPOTLIGHT_ID})`}
        style={{ scale: 1 }}
      />
    </Root>
  );
