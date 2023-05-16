import { type FC } from "react";
import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import { Fill } from "@components/metal/Fill";
import { Border as Select } from "@components/select/Border";
import { Text } from "@components/text/Text";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ANCHOR_CLASS } from "./constants";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Contact: FC<TProps> = () => {
  const { handlers, isSelected } =
    useSelectHandlers("Contact");

  return (
    <Root {...handlers}>
      <Link
        to="/contact"
        className={clsx(ANCHOR_CLASS)}
        {...handlers}
      >
        <Fill inset={2} />
        <Text classValue="relative">Contact</Text>
        {isSelected ? <Select /> : null}
      </Link>
    </Root>
  );
};
