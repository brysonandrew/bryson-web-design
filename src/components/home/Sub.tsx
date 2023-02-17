import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const Root = styled(motion.div)``;

export const Sub = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(opacity, [1, 0], [1, 0.8]);

  return (
    <Root
      style={{ opacity, scale }}
      className="absolute top-6 -right-2 bg-black-dark w-full z-20"
    >
      <div className="absolute top-4 right-4 w-5/12 h-1/2">
        <p className="relative --panel pl-4 pr-2 pt-1 pb-2 w-full rounded-md">
          Hi, my name is Andrew and I make web apps.
          {/* <div className="absolute left-0 top-0 h-full w-px bg-green" /> */}
        </p>
      </div>
    </Root>
  );
};
