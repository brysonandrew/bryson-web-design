import { VolumeOff } from "@components/icons/VolumeOff";
import { VolumeOn } from "@components/icons/VolumeOn";
import styled from "@emotion/styled";
import { useContext } from "@state/Context";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

export const Sound = () => {
  const { isSound, dispatch } = useContext();

  const handleTap = () => {
    dispatch({ type: "toggle-sound", value: null });
  };

  return (
    <Root className="absolute bottom-2 right-2 z-50">
      <Button
        className="p-4 rounded-full text-teal-bright bg-black cursor-pointer"
        onTap={handleTap}
      >
        {isSound ? <VolumeOn /> : <VolumeOff />}
      </Button>
    </Root>
  );
};
