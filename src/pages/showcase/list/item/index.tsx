import type { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background as Select } from "@components/select/Background";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Container } from "@pages/showcase/full/Container";
import {
  IMG_KEY,
  SELECTED_KEY,
} from "@pages/showcase/config";
import { Link as InternalLink } from "react-router-dom";
import { titleToKebab } from "@utils/format";
import { useOnSound } from "@hooks/sounds/useOnSound";
import { MOTION_CONFIG } from "@constants/animation";
import { Text } from "./Text";
import type { TItem } from "@t/showcase";
import { LINE_COLOR_STYLE } from "@components/Line";
import clsx from "clsx";
import type { TChildren } from "@t/index";

const Root = styled(motion.li)``;
type TProps = TItem & {
  selectedPath: string | null;
  children: TChildren;
};
export const Item: FC<TProps> = (props) => {
  const { title, selectedPath, altTo, children } = props;
  const { isSelected, handlers } = useSelectHandlers(title);
  const key = titleToKebab(title);
  const handleOnSound = useOnSound();

  return (
    <Root className="flex relative" {...handlers}>
      <InternalLink
        to={
          altTo
            ? altTo
            : `/showcase?${SELECTED_KEY}=${key}&${IMG_KEY}=${1}`
        }
        onClick={handleOnSound}
        className="relative rounded-md w-full h-14 lg:h-10"
      >
        <Container
          id={key}
          classValue="flex items-center justify-between absolute inset-0 text-lg w-full"
        >
          <AnimatePresence>
            {selectedPath !== key && (
              <motion.div
                className="relative flex flex-col w-full lg:flex-row pl-6 pr-2 py-1"
                key="SELECTED_ITEM_TEXT_KEY"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    ...MOTION_CONFIG,
                    delay:
                      MOTION_CONFIG.transition.duration,
                  },
                }}
                exit={{ opacity: 0 }}
              >
                <Text {...props} />
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
        {isSelected && (
          <Select
            classValue={clsx(
              LINE_COLOR_STYLE,
              "rounded-sm",
            )}
          />
        )}
        {children}
      </InternalLink>
    </Root>
  );
};
