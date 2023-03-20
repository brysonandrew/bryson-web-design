import { Main } from "./Main";
import { REVIEWS } from "./constants";
import { Blinders } from "@components/blinders/Blinders";
import clsx from "clsx";
import { Review } from "./Review";
import styled from "@emotion/styled";
import { Text } from "@components/text/Text";
import { motion } from "framer-motion";
import { FC, Fragment, useRef, useState } from "react";
import {
  DELAY,
  DELAY_2,
  FULL,
  GAP_2,
  ROLLING_TEXT_CLASS,
} from "../constants";
import { useOutsideClick } from "@hooks/useOutsideClick";
import { TChildrenProps } from "./Motion";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;
const Item = styled(motion.li)``;

type TProps = Partial<TChildrenProps>;
export const Shell: FC<TProps> = ({
  xs,
  opacityBlinders,
}) => {
  const [long, setLong] = useState<number | null>(null);
  const isLong = typeof long === "number";
  const closeLong = () => setLong(null);
  const openLong = setLong;
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick({ ref, handler: closeLong });

  return (
    <Root
      ref={ref}
      className="relative flex flex-col items-start z-10"
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
            onTap={closeLong}
          />
        ) : null}
        <motion.ul>
          {REVIEWS.map((review, index: number) => (
            <Fragment key={`group-${index}`}>
              <Item
                className={clsx(
                  "relative flex w-full overflow-hidden",
                )}
                onTap={() => openLong(index)}
              >
                <List
                  className="inline-flex"
                  style={{
                    x: (xs ?? [
                      "-100%",
                      "-100%",
                      "-100%",
                    ])[index],
                  }}
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
