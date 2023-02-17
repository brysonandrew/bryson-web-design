import { motion } from "framer-motion";
import { Home } from "@components/home";
import { Links } from "@components/links";
import { PrivacyScreen } from "@components/PrivacyScreen";
import { Tech } from "@components/tech";
import { Timeline } from "@components/timeline";
import styled from "@emotion/styled";

const Root = styled(motion.div)`
  min-height: calc(100vh + 200px);
`;

const Mid = styled(motion.section)`
  max-width: 480px;
`;

export const Index = () => (
  <Root className="p-2">
    <Mid className="relative my-0 mx-auto">
      <Home /> 
      <div className="py-28" />
      <div className="relative z-20 bg-black-dark border-teal-fade border rounded-md">
        <div className="p-2">
          <Tech />
        </div>
        <div className="p-1" />
        <div className="bg-teal-fade w-full h-px" />
        <div className="p-2">
          <Timeline />
        </div>
        <div className="p-1" />
        <div className="bg-teal-fade w-full h-px" />
        <div className="p-2">
          <Links />
        </div>
      </div>
    </Mid>
    <PrivacyScreen />
  </Root>
);
