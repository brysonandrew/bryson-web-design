import styled from "@emotion/styled";
import { useKey } from "@moth-hooks/useKey";
import { useMothContext } from "@moth-state/Context";
import { motion } from "framer-motion";
import type { FC } from "react";
import COLORS from "@windi/config-colors.json";

const Root = styled.div``;

export const GameOver: FC = () => {
  const { reset } = useMothContext();
  const handleContinue = reset;

  useKey({
    handlers: {
      onKeyDown: ({ key }) => {
        if (key === "Enter") {
          handleContinue();
        }
      },
    },
    isActive: true,
  });

  return (
    <Root className="flex flex-col items-center justify-center w-screen h-screen">
      <h2 className="uppercase text-2xl">Game over</h2>
      <div className="py-4" />
      <motion.button
        className="px-4 py-2 shadow-teal-bright-04 text-white"
        onTap={handleContinue}
        animate={{
          backgroundColor: COLORS["teal-bright-01"],
        }}
        whileHover={{
          backgroundColor: COLORS["teal-bright-02"],
        }}
      >
        continue
      </motion.button>
    </Root>
  );
};
