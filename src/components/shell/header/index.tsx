import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Main } from "@components/text/main";
import { useLocation } from "react-router";
import { Item } from "./right/Item";
import { Fragment } from "react";
import {
  HEADER_TRANSITION,
  HEADER_TRANSITION_EXIT,
} from "@constants/animation";
import { useContext } from "@state/Context";
import clsx from "clsx";
import { Line } from "@components/Line";

const FINAL_HEADER_HEIGHT = 60;

const Root = styled(motion.header)``;
const Background = styled(motion.div)``;
const BackgroundFade = styled(motion.div)``;
const Border = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Header = () => {
  const { isInit } = useContext();
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 40],
    [0.1, 0],
  );
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [1, 0],
  );
  const height = useTransform(
    scrollY,
    [0, 100],
    [100, FINAL_HEADER_HEIGHT],
  );
  const scaleY = useTransform(scrollY, [0, 100], [0, 2]);
  const { pathname } = useLocation();

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
      className="flex items-center justify-between fixed top-0 left-0 w-full h-20 px-4 pt-4 pb-5 z-50"
      {...(isInit ? initAnimation : {})}
    >
      <Background
        style={{ opacity: backgroundOpacity }}
        className="absolute bg-black-dark inset-0"
      />
      <Border
        style={{ opacity: borderOpacity }}
        className="absolute -bottom-1 left-0 w-full"
      >
        <Line />
      </Border>
      <BackgroundFade
        style={{
          scaleY,
          originY: 0,
          originX: 0,
          height: FINAL_HEADER_HEIGHT * 2,
        }}
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-black-dark pointer-events-none"
      />
      <Main />
      <List
        className={clsx(
          "flex flex-col items-center pt-2 md:flex-row",
        )}
      >
        {["showcase", "contact"].map((item, index) => {
          const to = `/${item}`;
          if (pathname === to) return null;
          return (
            <Fragment key={item}>
              {index !== 0 && (
                <li
                  key={`${index}`}
                  className="p-0.25 md:p-2"
                />
              )}
              <Item to={to}>{item}</Item>
            </Fragment>
          );
        })}
      </List>
    </Root>
  );
};
