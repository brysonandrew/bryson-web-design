import { Background as Select } from "@components/select/Background";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Container } from "@pages/showcase/Containers";
import {
  ITEM_HEIGHT,
  SELECTED_PATH,
} from "@pages/showcase/config";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

type TPreserveY = {
  timeout: ReturnType<typeof setTimeout> | null;
  y: number;
};

const Root = styled(motion.li)``;
type TProps = {
  isSelectedItem?: boolean;
  children: string;
};
export const Item: FC<TProps> = ({
  isSelectedItem,
  children,
}) => {
  const { isSelected, handlers } =
    useSelectHandlers(children);

  return (
    <Root
      className="flex relative shadow-teal-04-sm bg-teal-005"
      {...handlers}
    >
      {
        <Link
          to={`/showcase?${SELECTED_PATH}=${children
            .toLowerCase()
            .replace(/\s/g, "-")}`}
          className="relative rounded-md w-full"
          style={{ height: ITEM_HEIGHT }}
        >
          <Container
            id={children}
            classValue="absolute"
          />
          {isSelected && <Select />}
        </Link>
      }
    </Root>
  );
};
