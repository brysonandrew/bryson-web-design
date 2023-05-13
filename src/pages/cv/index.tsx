import { Displacement, ID, } from "@components/effects/displacement";
import { Laptop } from "@components/icons/Laptop";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import { Sub } from "@components/text/Sub";
import { GlitchPorsalin } from "@components/text/main/glitch-porsalin";
import styled from "@emotion/styled";
import { useStyles } from "@styles/useStyles";
import { resolveUrlId } from "@utils/resolveUrlId";
import COLORS from "@windi/config-colors.json";
import { motion } from "framer-motion";
import { FilterShell } from "@components/FilterShell";
import { SIZE } from "./constants";

const Root = styled(motion.div)``;
const _Card = styled(motion.div)``;

export const Cv = () => {
  useStyles();
  return (
    <Root className="w-screen h-screen bg-green">
      <FilterShell>
        <Displacement />
      </FilterShell>
      <_Card
        className="flex flex-col bg-black"
        style={{ ...SIZE }}
      >
        <div className="flex flex-col items-center">
          <div className="py-2" />
          <div className="flex items-center">
            <div>
            <GlitchPorsalin offset={0.4}>
              <Laptop
                width={72}
                height={72}
                fill="none"
                strokeWidth={12}
                filter={resolveUrlId(ID)}
              />
            </GlitchPorsalin>
            </div>
            <div className="p-4" />
            <GlitchPorsalin
              style={{ fontSize: 72 }}
              offset={0.2}
            >
              Andrew Bryson
            </GlitchPorsalin>
          </div>
          <div className="py-1" />
          <Sub
            style={{
              fontSize: 54,
              color: COLORS["teal"],
            }}
          >
            {EXPERIENCE_SLOGAN}
          </Sub>
        </div>
        <div className="py-2" />
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
