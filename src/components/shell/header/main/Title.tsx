import { Desk } from "@components/icons/Desk";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { CSSProperties, FC } from "react";
import { Sub } from "../../../text/Sub";
import { GlitchPorsalin } from "../../../text/glitch-porsalin";
import { STROKE_CLASS_NAMES } from "../../../text/glitch-porsalin/config";

const Root = styled(motion.div)``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = (props) => (
    <Root className="flex items-center">
      <div className="-mt-3">
        <GlitchPorsalin
          offset={0.6}
          tag="div"
          classValues={STROKE_CLASS_NAMES}
        >
          <Desk 
            width={60}
            height={60}
            fill="none"
            strokeWidth={8}
          />
        </GlitchPorsalin>
      </div>
      <motion.div className="flex relative px-3 pt-0 pb-1 grow">
        <motion.div className="hidden flex-col sm:flex">
          <GlitchPorsalin {...props} offset={0.2}>
            <span
              style={{
                position: "relative",
                left: 2,
                top: 2,
                width: "100%",
                fontSize: 32,
              }}
            >
              Bryson A
            </span>
          </GlitchPorsalin>
          <div className="p-0.5" />
          <Sub
            classValue="relative md:flex"
            style={{ fontSize: 18, left: 1 }}
          >
            {EXPERIENCE_SLOGAN}
          </Sub>
        </motion.div>
      </motion.div>
    </Root>
  );
