import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";

const Root = styled(motion.header)``;
const Title = styled(motion.div)``;
const Main = styled(motion.h1)``;
const Sub = styled(motion.h2)``;

export const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const x = useTransform(scrollY, [0, 100], [0, -28]);
  const xx = useTransform(scrollY, [0, 100], [0, -100]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <Root className="flex items-center fixed w-full top-0 left-0 pt-4 pb-5 px-8 z-40">
      <Main
        className="relative z-10 grow-0 text-xl uppercase leading-none"
        style={{ scale, x }}
      >
        brysona.dev
      </Main>
      <Title
        className="flex items-center grow"
        style={{ opacity }}
      >
        <motion.div className="absolute left-0 bottom-0 w-full shadow-teal-fade-sm" />
        <motion.div className="absolute w-full inset-0 bg-black-dark border-teal-fade backdrop-blur-lg" />
        <div className="p-2" />
        <Sub
          style={{ scale, x: xx }}
          className="relative text-sm text-teal mt-1 whitespace-nowrap leading-none"
        >
          {/* Servicing Your Frontend's Needs */}
          sᴇʀᴠɪᴄɪɴɢ ʏᴏᴜʀ ғʀᴏɴᴛᴇɴᴅ's ɴᴇᴇᴅs
        </Sub>
      </Title>
      <div className="flex items-center mt-1">
        {/* <Link
          to="/work"
          className={clsx(
            BUTTON,
            "flex items-center text-teal",
          )}
        >
          <Work />
          <div className="p-1" />
          <span>Work</span>
        </Link>
        <div className="px-2" /> */}
        <a
          href="mailto:andrewbryson12@gmail.com"
          className="relative flex items-center justify-center pl-2 py-1"
        >
          {/* <Email className={clsx(XS, "text-teal")} />
          <div className="p-1" /> */}
          <h6 className="uppercase text-xxxs">contact</h6>
        </a>
      </div>
    </Root>
  );
};
