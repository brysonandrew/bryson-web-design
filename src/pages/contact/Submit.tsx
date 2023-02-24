import styled from "@emotion/styled";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TSendingState } from "./config";
import { LABEL_CLASS, resolveButtonValue } from "./config";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { SELECT_LAYOUT_ID } from "@components/cursor/config";
import { Select } from "@components/Select";

const SUBMIT_ID = "SUBMIT_ID";

const Root = styled(motion.label)``;
const Input = styled(motion.input)``;
const Selected = styled(motion.div)``;

type TProps = {
  sendingState: TSendingState;
};
export const Submit: FC<TProps> = ({ sendingState }) => {
  const { handlers, isSelected } =
    useSelectHandlers(SUBMIT_ID);
  const isDisabled = sendingState !== "idle";

  return (
    <Root
      className={clsx("px-4 py-2", LABEL_CLASS)}
      {...handlers}
    >
      {isSelected && <Select />}
      <Input
        className={clsx("absolute inset-0 cursor-pointer")}
        type="submit"
        style={{
          opacity: sendingState === "idle" ? 0.5 : 1,
        }}
        whileHover={{ opacity: 1 }}
        disabled={isDisabled}
      />
      <div className="relative text-center text-white">
        {resolveButtonValue(sendingState)}
      </div>
    </Root>
  );
};
