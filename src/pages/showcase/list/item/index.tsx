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
import { Time } from "../../Time";
import { Text } from "@components/text/Text";
import { TextSm } from "@components/text/TextSm";

const Root = styled(motion.li)``;
type TProps = TItem;
export const Item: FC<TProps> = ({
  title,
  time,
  description,
}) => {
  const { isSelected, handlers } = useSelectHandlers(title);
  const key = titleToKebab(title);

  return (
    <Root
      className="flex relative shadow-teal-01-sm"
      {...handlers}
    >
      <InternalLink
        to={`/showcase?${SELECTED_KEY}=${key}&${IMG_KEY}=${0}`}
        className="relative rounded-md w-full"
        style={{ height: ITEM_HEIGHT }}
      >
        <Container
          id={key}
          classValue="flex items-center justify-between absolute inset-0 px-4 text-lg w-full"
        >
          <div className="flex items-center">
            <TextSm classValue="px-0">
              <motion.span className="truncate" layout>
                {title}
              </motion.span>
            </TextSm>
            <div className="p-1" />
            <TextSm classValue="text-gray" layout>
              <motion.span className="truncate" layout>
                {description}
              </motion.span>
            </TextSm>
          </div>
          <div className="p-1" />
          <div className="absolute top-0 right-0 py-2 px-4 bg-black">
            <Time time={time} />
          </div>
        </Container>
        {isSelected && <Select />}
      </InternalLink>
    </Root>
  );
};
