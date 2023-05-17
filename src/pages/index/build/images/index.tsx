import { useEffect, type FC } from "react";
import type { TChildrenProps } from "../Motion";
import { useImages } from "./useImages";
import styled from "@emotion/styled";
import {
  animate,
  motion,
  useMotionValue,
} from "framer-motion";

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Images: FC<TProps> = () => {
  const y = useMotionValue("0%");
  useEffect(() => {
    animate(y, "-100%", { duration: 2 });
  }, []);
  const images = useImages();

  return (
    <Root className="absolute inset-0">
      <motion.ul
        style={{
          y,
        }}
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
