
import styled from "@emotion/styled";
import { VolumeOff } from "@moth-components/icons/VolumeOff";
import { VolumeOn } from "@moth-components/icons/VolumeOn";
import { useMothContext } from "@moth-state/Context";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

export const Sound = () => {
  const { isSound, dispatch } = useMothContext();

  const handleTap = () => {
    dispatch({ type: "toggle-sound", value: null });
  };

  return (
    <Root className="relative z-50">
      <Button
        className="p-4 rounded-full text-teal-bright bg-black cursor-pointer"
        onTap={handleTap}
      >
        {isSound ? <VolumeOn /> : <VolumeOff />}
      </Button>
    </Root>
  );
};
