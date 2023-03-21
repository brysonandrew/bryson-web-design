import { Background as Select } from "@components/select/Background";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Container } from "@pages/showcase/full/Container";
import {
  IMG_KEY,
  ITEM_HEIGHT,
  SELECTED_KEY,
  resolveMedia,
} from "@pages/showcase/config";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { TChildren } from "@t/index";
import { kebabToTitle } from "@utils/format";

const Title = styled(motion.div)``;

const Root = styled(motion.li)``;
type TProps = {
  name: string;
  children: string;
};
export const Item: FC<TProps> = ({ name, children }) => {
  const { isSelected, handlers } = useSelectHandlers(name);

  return (
    <Root
      className="flex relative shadow-teal-04-sm bg-teal-005"
      {...handlers}
    >
      <Link
        to={`/showcase?${SELECTED_KEY}=${name}&${IMG_KEY}=${0}`}
        className="relative rounded-md w-full"
        style={{ height: ITEM_HEIGHT }}
      >
        <Container id={name} classValue="flex items-center justify-center absolute inset-0 text-2xl">
          <Title className="whitespace-nowrap" layout>
            {kebabToTitle(children)}
          </Title>
        </Container>
        {isSelected && <Select />}
      </Link>
    </Root>
  );
};
