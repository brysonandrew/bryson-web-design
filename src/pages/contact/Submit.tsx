import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TSendingState } from "./config";
import {
  LABEL_BASE_CLASS,
  LABEL_CLASS,
  resolveButtonValue,
} from "./config";
import { useMoveSound } from "@hooks/sounds/useMoveSound";
import { LINE_COLOR_STYLE } from "@components/Line";

const SUBMIT_ID = "SUBMIT_ID";

const Root = styled(motion.label)``;
const Decoration = styled(motion.div)``;
const Input = styled(motion.input)``;

type TProps = {
  sendingState: TSendingState;
};
export const Submit: FC<TProps> = ({ sendingState }) => {
  const { handlers, isSelected } =
    useSelectHandlers(SUBMIT_ID);
  const isDisabled = sendingState !== "idle";
  const handleMoveSound = useMoveSound();

  return (
    <Root
      className={clsx(
        "relative p-2 flex w-full cursor-pointer",
      )}
      onTap={handleMoveSound}
      {...handlers}
    >
      {isSelected && <Select />}
      <Decoration
        className={clsx(
          LABEL_BASE_CLASS,
          "px-2 py-1.5 pointer-events-none",
        )}
      >
        <Input
          className={clsx("absolute inset-0 cursor-pointer")}
          type="submit"
          style={{
            opacity: sendingState === "idle" ? 0.5 : 1,
          }}
          whileHover={{ opacity: 1 }}
          disabled={isDisabled}
        />
        <h4
          className={clsx(
            "relative text-center text-white py-2 cursor-pointer",
            LINE_COLOR_STYLE,
          )}
        >
          {resolveButtonValue(sendingState)}
        </h4>
      </Decoration>
    </Root>
  );
};
