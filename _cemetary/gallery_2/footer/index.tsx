import { useEffect } from "react";
import type { FC } from "react";
import { animate, motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import styled from "@emotion/styled";
import { Item } from "./Item";
import { useX } from "../useX";
import { WIDTH } from "../sections/constants";
import { useContext } from "@state/Context";
import {
  IMG_KEY,
  SELECTED_KEY,
  TMedia,
} from "@pages/showcase/config";

export const Root = styled(motion.footer)``;
const Center = styled(motion.div)``;
export const List = styled(motion.ul)``;

type TProps = {
  items: TMedia[];
  motionX: MotionValue;
};
export const Footer: FC<TProps> = ({ items, motionX }) => {
  const { dispatch } = useContext();
  const nextX = useX(items);
  const itemWidth = WIDTH / items.length;

  const startTransition = () =>
    dispatch({
      type: "start-page-transition",
      value: null,
    });
  const endTransition = () =>
    dispatch({ type: "end-page-transition", value: null });

  const handleDragStart = startTransition;
  const handleDragEnd = endTransition;

  useEffect(() => {
    const subscribe = animate(motionX, nextX, {
      ease: "easeIn",
      duration: 0.4,
      onPlay: startTransition,
      onComplete: endTransition,
    });
    return subscribe.stop;
  }, [nextX]);

  return (
    <Root className="flex justify-center fixed left-0 bottom-0 w-full bg-black-5 backdrop-blur-sm">
      <Center
        className="relative h-full"
        style={{ width: itemWidth }}
      >
        <List
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrag={(e: PointerEvent) => e.preventDefault()}
          drag="x"
          dragConstraints={{
            left: -WIDTH + itemWidth,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="relative flex items-center h-full pt-10 px-4 bg-black-09 cursor-grab active:cursor-grabbing"
          initial={false}
          style={{
            x: motionX,
            width: WIDTH,
          }}
        >
          {items.map(({ key, name, img }) => (
            <Item
              key={key}
              name={img}
              to={`/gallery?${SELECTED_KEY}=${name}&${IMG_KEY}=${img}`}
              count={items.length}
            />
          ))}
        </List>
      </Center>
    </Root>
  );
};
