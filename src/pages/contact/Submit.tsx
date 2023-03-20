import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TSendingState } from "./config";
import { LABEL_CLASS, resolveButtonValue } from "./config";

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

  return (
    <Root
      className={clsx("relative p-2 flex w-full cursor-pointer")}
      {...handlers}
    >
      {isSelected && <Select />}
      <Decoration
        className={clsx(
          "px-4 py-2 pointer-events-none",
          LABEL_CLASS,
        )}
      >
        <Input
          className={clsx("absolute inset-0")}
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
      </Decoration>
    </Root>
  );
};
