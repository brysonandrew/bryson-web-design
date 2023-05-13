import { VolumeOff } from "@components/icons/VolumeOff";
import { VolumeOn } from "@components/icons/VolumeOn";
import { GlitchPorsalin } from "@components/text/main/glitch-porsalin";
import styled from "@emotion/styled";
import { useContext } from "@state/Context";
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
      className="absolute bottom-2 right-2 z-50"
    >
      <Background
        variants={{ hover: { scale: 0.9 } }}
        className="p-5 rounded-full absolute -inset-0.5 bg-red-02"
      />
      <Button
        className="relative p-4 rounded-full bg-black cursor-pointer"
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
