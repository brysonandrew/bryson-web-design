import { FC, Fragment, useRef, useState } from "react";
import {
  AnimatePresence,
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
  ROLLING_TEXT_CLASS,
} from "../constants";
import { Main } from "./Main";
import { REVIEWS } from "./constants";
import { Blinders } from "../../../components/blinders/Blinders";
import clsx from "clsx";
import { Review } from "./Review";
import { Border } from "@components/select/Border";
import { SELECT_LAYOUT_ID } from "@components/cursor/config";
import { Background } from "@components/select/Background";
import { MOTION_CONFIG } from "@constants/animation";
import { useOutsideClick } from "@hooks/useOutsideClick";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;
const Item = styled(motion.li)``;

type TProps = HTMLMotionProps<"div">;
export const Reviews: FC<TProps> = () => {
  const [long, setLong] = useState<number | null>(null);
  const isLong = typeof long === "number";

  const handleHoverStart = (id: number) => setLong(id);
  const handleHoverEnd = () => setLong(null);

  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick({ ref, handler: handleHoverEnd });

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
    <Root
      ref={ref}
      className="relative flex flex-col items-start z-10"
      onHoverEnd={handleHoverEnd}
    >
      <Text>For businesses</Text>
      <div className="py-2" />
      <Blinders opacity={opacityBlinders} />
      <div className={clsx("relative w-full h-full")}>
        {isLong ? (
          <Review
            layoutId={`${long}`}
            index={long}
            type="long"
            onHoverEnd={handleHoverEnd}
          />
        ) : null}
        <motion.ul>
          {REVIEWS.map((review, index: number) => (
            <Fragment key={`group-${index}`}>
              <Item
                className={clsx(
                  "relative flex w-full overflow-hidden",
                )}
                onHoverStart={() => handleHoverStart(index)}
                onTap={() => handleHoverStart(index)}
              >
                <List
                  className="inline-flex"
                  style={{ x: xs[index] }}
                >
                  <li className={ROLLING_TEXT_CLASS}>
                    <Text>{review.long}</Text>
                  </li>
                  <Main
                    isActive={index === long}
                    isLong={isLong}
                    index={index}
                  />
                </List>
              </Item>
            </Fragment>
          ))}
        </motion.ul>
      </div>
    </Root>
  );
};
