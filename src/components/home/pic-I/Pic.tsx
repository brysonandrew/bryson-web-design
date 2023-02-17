import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { GlitchFilter } from "./GlitchFilter";
import {
  GLITCH_FILTER_I_I,
  GLITCH_FILTER_I_II,
  GLITCH_FILTER_I_III,
} from "@constants/keys";

const Root = styled(motion.div)`
  max-width: 480px;
`;

const Image = styled.image`
  filter: url(#${GLITCH_FILTER_I_I});
  animation: 6s my-animation alternate infinite;

  @keyframes my-animation {
    0% {
      filter: grayscale(100%);
    }
    19% {
      filter: url(#${GLITCH_FILTER_I_I});
    }
    20% {
      filter: url(#${GLITCH_FILTER_I_II});
    }
    21% {
      filter: url(#${GLITCH_FILTER_I_III});
    }
    94% {
      filter: grayscale(100%);
    }
  }
`;

export const Pic = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(opacity, [1, 0], [1, 0.8]);

  return (
    <Root
      style={{ opacity, scale }}
      className="relative top-0 left-4 opacity-40"
    >
      <GlitchFilter width="294" height="268">
        <Image
          x="0%"
          y="0%"
          width="254"
          height="248"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref="/headandshoulders.png"
        />
      </GlitchFilter>
    </Root>
  );
};
