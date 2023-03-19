import { Background as Select } from "@components/select/Background";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Container } from "@pages/showcase/full/Container";
import {
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
  path: string;
  children: string;
};
export const Item: FC<TProps> = ({ path, children }) => {
  const { isSelected, handlers } = useSelectHandlers(path);
  const { name, file, key } = resolveMedia(path);

  return (
    <Root
      className="flex relative shadow-teal-04-sm bg-teal-005"
      {...handlers}
    >
      {
        <Link
          to={`/showcase?${SELECTED_KEY}=${path}`}
          className="relative rounded-md w-full"
          style={{ height: ITEM_HEIGHT }}
        >
          <Container id={name} classValue="absolute">
            <Title className="whitespace-nowrap" layout>
              {kebabToTitle(children)}
            </Title>
          </Container>
          {isSelected && <Select />}
        </Link>
      }
    </Root>
  );
};
