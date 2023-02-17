import { Hello } from "@components/hello";
import { PrivacyScreen } from "@components/PrivacyScreen";
import { Tech } from "@pages/about/tech";
import { Timeline } from "@components/timeline";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
  min-height: calc(100vh + 200px);
`;

const Background = styled(motion.div)``;

const Mid = styled(motion.section)`
  max-width: 480px;
`;

export const About = () => (
  <Content id="#about">
    <Mid className="relative my-0 mx-auto">
      <Hello />
      <div className="py-40" />
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
    <PrivacyScreen />
  </Content>
);
