import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Sub as _Sub } from "@components/text/Sub";
import { EXPERIENCE_SLOGAN } from "../constants";

const Root = styled(motion.div)``;

export const Sub = () => {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, 100], [0, -28]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <Root
      className="flex items-center"
    >
      <_Sub
        style={{ scale, x }}
        classValue="relative md:flex"
      >
        {EXPERIENCE_SLOGAN}
      </_Sub>
    </Root>
  );
};
