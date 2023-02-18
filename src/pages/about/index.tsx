import { Screen } from "@components/Screen";
import { Tech } from "@pages/about/tech";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Hello } from "./hello";
import { Timeline } from "./timeline";

const Content = styled(motion.div)`
  min-height: calc(100vh + 200px);
`;

const Background = styled(motion.div)``;

const Mid = styled(motion.section)`
  max-width: 480px;
`;

export const About = () => (
  <Content>
    <Mid className="relative my-0 mx-auto">
      <Hello />
      <div className="py-44" />
      <div className="relative z-20 px-2 py-4">
        {/* <Background
          className="absolute inset-0 bg-teal-005"
          // style={{ opacity, scale }}
        /> */}
        <Tech>
          <Timeline />
        </Tech>
      </div>
      <div className="py-40" />
    </Mid>
    <Screen />
  </Content>
);
