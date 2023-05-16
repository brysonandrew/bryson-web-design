import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Line } from "@components/Line";

const FINAL_HEADER_HEIGHT = 60;

const BackgroundFade = styled(motion.div)``;

export const Decoration = () => {
  const { scrollY } = useScroll();
  const scaleY = useTransform(scrollY, [0, 100], [0, 2]);

  return (
    <>
      <Line height={20} position="absolute" />
      <BackgroundFade
        style={{
          scaleY,
          originY: 0,
          originX: 0,
          height: FINAL_HEADER_HEIGHT * 2,
        }}
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-black-dark pointer-events-none px-4 pt-4 pb-5"
      />
    </>
  );
};
