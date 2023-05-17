import { useEffect, type FC } from "react";
import type { TChildrenProps } from "../Motion";
import { useImages } from "./useImages";
import styled from "@emotion/styled";
import {
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import { useContext } from "@state/Context";
const END_ANIMATION_STATE = "-100%";

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Images: FC<TProps> = () => {
  const { isInit, dispatch } = useContext();
  const y = useMotionValue("0%");

  useEffect(() => {
    if (isInit) {
      animate(y, END_ANIMATION_STATE, {
        duration: 6,
        ease: "easeInOut",
      });
      dispatch({ type: "init", value: null });

    } else {
      y.set(END_ANIMATION_STATE);
    }
  }, [isInit]);
  const images = useImages();

  return (
    <Root className="absolute inset-0">
      <motion.ul
        style={{ y }}
        className="relative top-full"
      >
        {images.map((image, index) => (
          <li key={`image-${index}`}>
            <img src={image.default} />
          </li>
        ))}
      </motion.ul>
      <div className="absolute inset-0 bg-black-04" />
    </Root>
  );
};
