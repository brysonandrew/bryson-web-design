import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Typewriter } from "@components/typewriter";

const Root = styled(motion.div)`
  max-width: 600px;
`;

const Background = styled(motion.div)``;

const Text = styled(motion.div)``;

const Image = styled.image``;

const Frame = styled(motion.div)``;

export const Content = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(opacity, [1, 0], [1, 0.8]);
  //   useEffect(() => {
  // console.log(window.navigator)
  //   },[])
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
        <svg width="360" height="280" viewBox="0 0 360 280">
          <Image
            x="0"
            y="0"
            width="360"
            height="280"
            preserveAspectRatio="xMidYMid slice"
            xlinkHref="/mugshot2.png"
          />
        </svg>
      </Frame>
      <Text
        style={{ opacity, scale }}
        className="absolute top-6 left-0 bg-black-dark w-full z-20"
      >
        <div className="absolute top-4 left-6 w-5/12 h-1/2">
          <p className="relative pl-4 pr-2 pt-2 pb-3 w-full rounded-xs text-teal-bright">
            <Typewriter
              delay={600}
              wip="Hi, my name is Andrew and I make websites and
            web applications"
            >
              {(content) => <>{content}</>}
            </Typewriter>

            {/* <div className="absolute left-0 top-0 h-full w-px bg-green" /> */}
          </p>
        </div>
      </Text>
    </Root>
  );
};
