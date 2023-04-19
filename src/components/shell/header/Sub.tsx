import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Sub as _Sub } from "@components/text/Sub";

const Root = styled(motion.div)``;

export const Sub = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 40], [1, 0]);
  const x = useTransform(scrollY, [0, 100], [0, -100]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <Root
      className="flex items-center grow"
      style={{ opacity }}
    >
      <div className="p-1" />
      <_Sub
        style={{ scale, x }}
        classValue="relative md:flex"
      >
        <>sᴇʀᴠɪᴄɪɴɢ ʏᴏᴜʀ ғʀᴏɴᴛᴇɴᴅ's ɴᴇᴇᴅs</>
      </_Sub>
    </Root>
  );
};
