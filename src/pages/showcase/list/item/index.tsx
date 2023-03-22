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
import { TextSm } from "@components/text/TextSm";

const Root = styled(motion.li)``;
type TProps = TItem;
export const Item: FC<TProps> = ({ title, time, href }) => {
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
          classValue="flex items-center justify-between absolute inset-0 px-4 text-lg"
        >
          <>
            <TextSm classValue="px-0" layout>{title}</TextSm>
            <div className="p-1" />
            <div>
              <Time time={time} />
            </div>
          </>
        </Container>
        {isSelected && <Select />}
      </InternalLink>
    </Root>
  );
};
