import styled from "@emotion/styled";
import { Email } from "@icons/Email";
import { Work } from "@icons/Work";
import { BUTTON } from "@styles/buttons";
import clsx from "clsx";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

const Root = styled.header`
  max-width: 480px;
`;

const Title = styled.h1``;

export const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  return (
    <Root className="fixed w-full top-0 left-1/2 -translate-x-1/2 mx-auto mt-2 px-2 flex items-center justify-between z-40">
      <motion.div
        style={{ opacity }}
        className="absolute w-full inset-0 bg-black-dark border-teal-fade backdrop-blur-lg"
      />
      <Title className="relative uppercase text-lg w-[calc(100%_-_4rem)]">
        frontend web
      </Title>
      <div className="flex items-center">
        <Link
          to="/work"
          className={clsx(BUTTON, "flex items-center text-teal")}
        >
          <Work />
          <div className="p-1" />
          <span>Work</span>
        </Link>
        <div className="px-2" />
        <a
          href="mailto:andrewbryson12@gmail.com"
          className="relative flex items-center justify-center rounded-full w-10 h-10 --panel"
        >
          <Email className="text-teal" />
        </a>
      </div>
    </Root>
  );
};
