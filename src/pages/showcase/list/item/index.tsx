import { Background as Select } from "@components/select/Background";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Container } from "@pages/showcase/full/Container";
import {
  ITEM_HEIGHT,
  SELECTED_PATH,
  resolveMedia,
} from "@pages/showcase/config";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Title = styled(motion.div)``;

const Root = styled(motion.li)``;
type TProps = {
  path: string;
};
export const Item: FC<TProps> = ({ path }) => {
  const { isSelected, handlers } = useSelectHandlers(path);
  const { name, file, key } = resolveMedia(path);

  return (
    <Root
      className="flex relative shadow-teal-04-sm bg-teal-005"
      {...handlers}
    >
      {
        <Link
          to={`/showcase?${SELECTED_PATH}=${path}`}
          className="relative rounded-md w-full"
          style={{ height: ITEM_HEIGHT }}
        >
          <Container id={name} classValue="absolute">
            <Title className="whitespace-nowrap" layout>
              {key}
            </Title>
          </Container>
          {isSelected && <Select />}
        </Link>
      }
    </Root>
  );
};
