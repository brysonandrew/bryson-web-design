import { Blinders } from "@components/blinders/Blinders";
import { Intro } from "@components/text/Intro";
import styled from "@emotion/styled";
import { useOffSound } from "@hooks/sounds/useOffSound";
import { useOnSound } from "@hooks/sounds/useOnSound";
import { useOutsideClick } from "@hooks/useOutsideClick";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useRef, useState } from "react";
import type { TChildrenProps } from "../Motion";
import { Review } from "../Review";
import { REVIEWS } from "../constants";
import { Item } from "./Item";

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Shell: FC<TProps> = ({
  xs,
  opacityBlinders,
}) => {
  const [long, setLong] = useState<number | null>(null);
  const isLong = typeof long === "number";

  const handleOnSound = useOnSound();
  const handleOffSound = useOffSound();

  const closeLong = async () => {
    if (isLong) {
      handleOffSound();
      setLong(null);
    }
  };

  const handleOpen = async (next: number) => {
    setLong(next);
    handleOnSound();
  };

  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick({ ref, handler: closeLong });

  return (
    <Root
      ref={ref}
      className="relative flex flex-col items-start z-10"
    >
      <Intro>For businesses</Intro>
      <div className="py-2" />
      <Blinders opacity={opacityBlinders} />
      <div className={clsx("relative w-full h-full left-8")}>
        {isLong ? (
          <Review
            layoutId={`${long}`}
            index={long}
            type="long"
          />
        ) : null}
        <motion.ul>
          {REVIEWS.map((review, index: number) => (
            <Item
              key={`group-${index}`}
              xs={xs}
              isActive={index === long}
              isLong={isLong}
              index={index}
              onTap={() => handleOpen(index)}
            >
              {review.long}
            </Item>
          ))}
        </motion.ul>
      </div>
    </Root>
  );
};
