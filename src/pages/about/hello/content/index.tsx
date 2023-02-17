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
  max-width: 600px;
`;

const Background = styled(motion.div)``;

const Text = styled(motion.div)``;

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

const Frame = styled(motion.div)``;

export const Content = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(opacity, [1, 0], [1, 0.8]);

  return (
    <Root
      style={{ opacity, scale }}
      className="flex justify-end w-full"
    >
      {/* <Background
        className="absolute inset-0 bg-teal-005"
        style={{ opacity, scale }}
      /> */}
      <Frame className="inline">
        <GlitchFilter width="360" height="280">
          <Image
            x="0%"
            y="0%"
            width="360"
            height="280"
            preserveAspectRatio="xMidYMid slice"
            xlinkHref="/mugshot2.png"
          />
        </GlitchFilter>
      </Frame>
      <Text
        style={{ opacity, scale }}
        className="absolute top-6 left-0 bg-black-dark w-full z-20"
      >
        <div className="absolute top-4 left-6 w-5/12 h-1/2">
          <p className="relative pl-4 pr-2 pt-2 pb-3 w-full rounded-xs text-teal-bright">
            Hi, my name is Andrew and I make websites and
            web applications
            {/* <div className="absolute left-0 top-0 h-full w-px bg-green" /> */}
          </p>
        </div>
      </Text>
    </Root>
  );
};
