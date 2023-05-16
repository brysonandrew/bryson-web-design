import { Space2 } from "@components/spaces/Space2";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;

const TEXT_CLASS = "text-md";
const Text = styled(motion.p)``;

export const Description = () => (
    <Root className="flex flex-col items-center justify-center">
      <Text className={TEXT_CLASS}>
        Working on the web for 6 years. Completed 20+
        projects. Almost all involving React and Typescript.
      </Text>
      <Space2 />
      <Text className={TEXT_CLASS}>
        Made an video game with THREE.js with an OST purely
        using the Web Audio API.
      </Text>
      <Space2 />
      <Text className={TEXT_CLASS}>
        Was in the top 100 of codewars.com, now maybe top
        500. Has some experience with React Native.
      </Text>
    </Root>
  );
