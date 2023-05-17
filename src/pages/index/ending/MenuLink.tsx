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
import { TChildren } from "@t/index";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  to: string;
  children: TChildren;
};
export const MenuLink: FC<TProps> = ({
  to,
  children,
  ...props
}) => {
  const { handlers, isSelected } = useSelectHandlers(to);

  return (
    <Root {...handlers} {...props}>
      <Link to={to} className={clsx(ANCHOR_CLASS)}>
        {isSelected ? <Select /> : null}
        <Fill inset={2} />
        <Text classValue="relative">{children}</Text>
      </Link>
    </Root>
  );
};
