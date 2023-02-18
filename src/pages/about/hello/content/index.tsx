import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Typewriter } from "@components/typewriter";
import { Glitch } from "@components/glitch";

const Root = styled(motion.div)`
  max-width: 600px;
`;

const Text = styled(motion.div)``;

export const Content = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(opacity, [1, 0], [1, 0.8]);
  return (
    <Root
      style={{ opacity, scale }}
      className="flex w-full"
    >
      <Glitch /> 
      <Text
        style={{ opacity, scale }}
        className="absolute top-6 left-0 bg-black-dark w-full z-20"
      >
        <div className="absolute top-4 left-6 w-5/12 h-1/2">
          <p className="relative pl-4 pr-2 pt-2 pb-3 w-full rounded-xs text-teal-bright bg-black-05">
            <Typewriter
              delay={600}
              wip="Hi, my name is Andrew and I make websites and
            web applications"
            >
              {(content) => <>{content}</>}
            </Typewriter>
          </p>
        </div>
      </Text>
    </Root>
  );
};
