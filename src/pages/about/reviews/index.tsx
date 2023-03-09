import type { FC } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import styled from "@emotion/styled";
import { Text } from "../../../components/text/Text";
import {
  DELAY,
  DELAY_2,
  FULL,
  GAP_1,
  GAP_2,
} from "../constants";
import { Main } from "./Main";
import { REVIEWS } from "./constants";
import { Blinders } from "../../../components/blinders/Blinders";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

type TProps = HTMLMotionProps<"div">;
export const Reviews: FC<TProps> = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [GAP_1, GAP_2], FULL);
  const x1 = useTransform(
    scrollY,
    [GAP_1 + DELAY, GAP_2 + DELAY],
    FULL,
  );
  const x2 = useTransform(
    scrollY,
    [GAP_1 + DELAY_2, GAP_2 + DELAY_2],
    FULL,
  );

  const xs = [x, x1, x2];

  const opacityBlinders = useTransform(
    scrollY,
    [GAP_1 + DELAY_2, GAP_2 + DELAY_2],
    [1, 0],
  );

  return (
    <Root className="flex flex-col items-start">
      <Text>Driven by feedback</Text>
      <div className="py-2" />
      <div className="relative overflow-hidden w-full h-full">
        <Blinders opacity={opacityBlinders} />
        <ul>
          {REVIEWS.map((review, index: number) => (
            <li
              key={`group-${index}`}
              className="relative flex w-full overflow-hidden"
            >
              <List
                className="inline-flex"
                style={{ x: xs[index] }}
              >
                <li className="uppercase bg-white bg-opacity-20 py-2 m-1 whitespace-nowrap opacity-20">
                  <Text>{review.long}</Text>
                </li>
                <Main index={index} />
              </List>
            </li>
          ))}
        </ul>
      </div>
    </Root>
  );
};
