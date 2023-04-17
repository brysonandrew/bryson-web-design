import styled from "@emotion/styled";
import { useMothContext } from "@moth-state/Context";
import { motion } from "framer-motion";
import { Volume } from "./Volume";
import { useState } from "react";
import clsx from "clsx";
import { useDetectGPU } from "@react-three/drei";
import { Mute } from "./Mute";
import { BUTTON_PADDING } from "@moth-constants/styles";

const Root = styled(motion.div)``;
const Items = styled.ul``;
const Item = styled.li``;
const Button = styled(motion.button)``;

export const Options = () => {
  const { isSound, dispatch } = useMothContext();
  // const { isMobile } = useDetectGPU();
  const handleTap = () => {
    dispatch({ type: "menu", value: null });
  };
  const [selected, setSelected] = useState<string | null>(
    null,
  );
  const isSelected = Boolean(selected);

  const buttonProps = {
    className: clsx(BUTTON_PADDING, [
      !isSelected && "cursor-not-allowed",
    ]),
    animate: { opacity: isSelected ? 1 : 0.4 },
  };

  return (
    <Root
      key="Options"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Mute />
      {/* <div className="py-1" />
      <div className="h-px bg-blue w-full" />
      <div className="py-1" />
      <Volume title="d" />
      <div className="py-1" />
      <div className="h-px bg-blue w-full" />
      <div className="py-1" />
      <Volume title="x" /> */}
    </Root>
  );
};
