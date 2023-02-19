import { Tech } from "@pages/about/tech";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Hello } from "./hello";
import { Timeline } from "./timeline";

const Root = styled(motion.div)`
  min-height: calc(100vh + 200px);
`;

const Mid = styled(motion.section)`
  max-width: 480px;
`;

export const About = () => (
  <Root>
    <Mid className="relative my-0 mx-auto">
      <Hello />
      <div className="py-44" />
      <div className="relative z-20 px-2 py-4">
        <Tech>
          <Timeline />
        </Tech>
      </div>
      <div className="py-28" />
    </Mid>
  </Root>
);
