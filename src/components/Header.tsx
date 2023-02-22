import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";
import { Link } from "react-router-dom";
import { Title } from "./text/Title";

const Root = styled(motion.header)``;
const Right = styled(motion.div)``;
const Sub = styled(motion.h2)``;

export const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const x = useTransform(scrollY, [0, 100], [0, -28]);
  const xx = useTransform(scrollY, [0, 100], [0, -100]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <Root className="flex items-center fixed w-full top-0 left-0 pt-4 pb-5 px-8 z-40">
      <Title {...{ scale, x }} />
      <Right
        className="flex items-center grow"
        style={{ opacity }}
      >
        <motion.div className="absolute left-0 bottom-0 w-full shadow-teal-fade-sm" />
        <motion.div className="absolute w-full inset-0 bg-black-dark border-teal-fade backdrop-blur-lg" />
        <div className="p-2" />
        <Sub
          style={{ scale, x: xx }}
          className="hidden md:flex relative text-sm text-teal mt-1 whitespace-nowrap leading-none"
        >
          <Typewriter
            delay={150}
            wip="sᴇʀᴠɪᴄɪɴɢ ʏᴏᴜʀ ғʀᴏɴᴛᴇɴᴅ's ɴᴇᴇᴅs"
          >
            {(content) => <>{content}</>}
          </Typewriter>
        </Sub>
      </Right>
      <div className="flex items-center mt-0.5">
        <Link
          to="/contact"
          className="relative flex items-center justify-center pl-2 py-1"
        >
          <h6 className="uppercase text-xxxs">
            <Typewriter delay={200} wip="contact">
              {(content) => <>{content}</>}
            </Typewriter>
          </h6>
        </Link>
      </div>
    </Root>
  );
};
