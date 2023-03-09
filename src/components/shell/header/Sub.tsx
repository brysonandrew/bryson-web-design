import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";
import { useContext } from "@state/Context";

const text = "sᴇʀᴠɪᴄɪɴɢ ʏᴏᴜʀ ғʀᴏɴᴛᴇɴᴅ's ɴᴇᴇᴅs" as const;

const Root = styled(motion.div)``;
const Text = styled(motion.h2)``;

export const Sub = () => {
  const { scrollY } = useScroll();
  const { isInit } = useContext();

  const opacity = useTransform(scrollY, [0, 40], [1, 0]);
  const x = useTransform(scrollY, [0, 100], [0, -100]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <Root
      className="flex items-center grow"
      style={{ opacity }}
    >
      <div className="p-2" />
      <Text
        style={{ scale, x }}
        className="hidden relative text-sm text-teal whitespace-nowrap leading-none md:flex"
      >
        {isInit ? (
          <Typewriter wip={text}>
            {(content) => <>{content}</>}
          </Typewriter>
        ) : (
          <>{text}</>
        )}
      </Text>
    </Root>
  );
};
