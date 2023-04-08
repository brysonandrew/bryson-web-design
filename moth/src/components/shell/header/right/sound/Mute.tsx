import { VolumeOff } from "@components/icons/VolumeOff";
import { VolumeOn } from "@components/icons/VolumeOn";
import styled from "@emotion/styled";
import { useMothContext } from "@state/Context";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

export const Mute = () => {
  const { isSound, dispatch } = useMothContext();

  const handleTap = () => {
    dispatch({ type: "menu", value: null });
  };

  return (
    <Root>
      <Button
        className="flex items-center p-2.5 rounded-full text-teal-bright bg-black bg-opacity-20 cursor-pointer"
        onTap={handleTap}
      >
        <div>{isSound ? "On" : "Off"}</div>
        <div className="p-1" />
        {/* {isSound ? <VolumeOn /> : <VolumeOff />} */}
      </Button>
    </Root>
  );
};
