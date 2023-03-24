import type { FC } from "react";
import { motion } from "framer-motion";
import { Background as Select } from "@components/select/Background";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Container } from "@pages/showcase/full/Container";
import {
  IMG_KEY,
  ITEM_HEIGHT,
  SELECTED_KEY,
} from "@pages/showcase/config";
import { Link as InternalLink } from "react-router-dom";
import { titleToKebab } from "@utils/format";
import type { TItem } from "@constants/showcase";
import { Text } from "./Text";
import { useOnSound } from "@hooks/sounds/useOnSound";

const Root = styled(motion.li)``;
type TProps = TItem;
export const Item: FC<TProps> = (props) => {
  const { title } = props;
  const { isSelected, handlers } = useSelectHandlers(title);
  const key = titleToKebab(title);
  const handleOnSound = useOnSound();

  return (
    <Root
      className="flex relative shadow-teal-01-sm"
      {...handlers}
    >
      <InternalLink
        to={`/showcase?${SELECTED_KEY}=${key}&${IMG_KEY}=${0}`}
        onClick={handleOnSound}
        className="relative rounded-md w-full"
        style={{ height: ITEM_HEIGHT }}
      >
        <Container
          id={key}
          classValue="flex items-center justify-between absolute inset-0 px-4 text-lg w-full"
        >
          <Text {...props} />
        </Container>
        {isSelected && <Select />}
      </InternalLink>
    </Root>
  );
};
