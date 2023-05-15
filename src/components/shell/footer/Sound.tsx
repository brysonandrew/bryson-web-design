import { LINE_COLOR_STYLE } from "@components/Line";
import { VolumeOff } from "@components/icons/VolumeOff";
import { VolumeOn } from "@components/icons/VolumeOn";
import { Fill } from "@components/metal/Fill";
import { GlitchPorsalin } from "@components/text/main/glitch-porsalin";
import styled from "@emotion/styled";
import { useContext } from "@state/Context";
import clsx from "clsx";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;
const Background = styled(motion.div)``;

export const Sound = () => {
  const { isSound, dispatch } = useContext();

  const handleTap = () => {
    dispatch({ type: "toggle-sound", value: null });
  };

  return (
    <Root
      whileHover="hover"
      className="absolute bottom-4 right-4 z-50"
    >
      <Fill classValue="rounded-full" inset={-1} />
      <Button
        className="relative p-3 rounded-full bg-black cursor-pointer"
        onTap={handleTap}
      >
        <GlitchPorsalin
          offset={2.8}
          tag="div"
          classValue="uppercase"
        >
          <Background variants={{ hover: { scale: 1.15 } }}>
            {isSound ? <VolumeOn /> : <VolumeOff />}
          </Background>
        </GlitchPorsalin>
      </Button>
    </Root>
  );
};
