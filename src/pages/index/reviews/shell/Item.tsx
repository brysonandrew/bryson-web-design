import { Text } from "@components/text/Text";
import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import clsx from "clsx";
import type { HTMLMotionProps} from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { ROLLING_TEXT_CLASS } from "../../constants";
import { Main } from "../Main";
import type { TChildrenProps } from "../Motion";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Border } from "@components/select/Border";
import { Background } from "@components/select/Background";
import { Bar } from "@components/select/Bar";

const Root = styled(motion.li)``;
const List = styled(motion.ul)``;
const Button = styled(motion.button)``;

type TProps = Pick<Partial<TChildrenProps>, "xs"> &
  HTMLMotionProps<"button"> & {
    isActive: boolean;
    isLong: boolean;
    index: number;
    children: TChildren;
  };
export const Item: FC<TProps> = ({
  isLong,
  isActive,
  xs,
  index,
  children,
  ...props
}) => {
  const { handlers, isSelected } = useSelectHandlers(
    `REVIEWS_SHELL_ITEM_${index}`,
  );
  return (
    <Root
      className={clsx(
        "relative flex w-full overflow-hidden",
      )}
      {...handlers}
    >
      <Button className="inline relative" {...props}>
        {isSelected && <Bar />}
        <List
          className="inline-flex relative"
          style={{
            x: (xs ?? ["-100%", "-100%", "-100%"])[index],
          }}
        >
          <li className={ROLLING_TEXT_CLASS}>
            <Text>{children}</Text>
          </li>
          <Main
            isActive={isActive}
            isLong={isLong}
            index={index}
          />
        </List>
      </Button>
    </Root>
  );
};
