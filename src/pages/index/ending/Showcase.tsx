import { Fill } from "@components/metal/Fill";
import { Border as Select } from "@components/select/Border";
import { Text } from "@components/text/Text";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import clsx from "clsx";
import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import { type FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ANCHOR_CLASS } from "./constants";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div">;
export const Showroom: FC<TProps> = () => {
  const { handlers, isSelected } =
    useSelectHandlers("Showroom");

  return (
    <Root
      {...handlers}
    >
      <Link
        to="/showcase"
        className={clsx(ANCHOR_CLASS)}
        {...handlers}
      >
        {isSelected ? <Select /> : null}
        <Fill inset={2} />
        <Text classValue="relative">Showcase</Text>
      </Link>
    </Root>
  );
};
