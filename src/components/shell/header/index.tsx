import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Main } from "@components/text/main";
import { useLocation } from "react-router";
import { Sub } from "./Sub";
import { Item } from "./right/Item";
import { Fragment } from "react";
import { useSelectedItem } from "@pages/showcase/useSelectedItem";
import {
  HEADER_TRANSITION,
  HEADER_TRANSITION_EXIT,
} from "@constants/animation";
import { useContext } from "@state/Context";

const Root = styled(motion.header)``;
const Background = styled(motion.div)``;
const BackgroundFade = styled(motion.div)``;
const Border = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Header = () => {
  const { isInit } = useContext();
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 100], [0, -28]);
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 40],
    [1, 0.4],
  );
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [1, 0.2],
  );
  const height = useTransform(scrollY, [0, 100], [100, 60]);
  const scaleY = useTransform(scrollY, [0, 100], [0, 2]);
  const { pathname } = useLocation();
  const isShowCase = useSelectedItem();

  const initAnimation = {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: "0%" },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: HEADER_TRANSITION_EXIT,
    },
    transition: HEADER_TRANSITION,
  };

  return (
    <Root
      className="flex items-center justify-between fixed top-0 left-0 w-full h-20 px-4 pt-4 pb-5 z-40"
      style={{ height }}
      {...(isInit ? initAnimation : {})}
    >
      <BackgroundFade
        style={{
          scaleY,
          originY: 0,
          originX: 0,
        }}
        className="absolute w-full top-full left-0 w-full h-full from-current bg-gradient-to-b border-teal-04 backdrop-blur-lg pointer-events-none"
      />
      <Background
        style={{ opacity: backgroundOpacity }}
        className="absolute bg-black-dark inset-0"
      />
      <Border
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 h-px w-full bg-teal-bright-08"
      />
      <div className="flex items-center">
        <Main {...{ scale, x }} />
        <Sub />
      </div>
      <List className="flex items-center mt-0.5">
        {[
          // "showcase",
          "contact",
        ].map((item, index) => {
          const to = `/${item}`;
          if (
            pathname === to ||
            (pathname === "/showcase" && !isShowCase)
          )
            return null;
          return (
            <Fragment key={item}>
              {index !== 0 && (
                <li key={`${index}`} className="p-2" />
              )}
              <Item to={to}>{item}</Item>
            </Fragment>
          );
        })}
      </List>
    </Root>
  );
};
