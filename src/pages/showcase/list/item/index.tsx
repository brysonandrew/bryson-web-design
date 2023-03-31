import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { useOnSound } from "@hooks/sounds/useOnSound";
import { MOTION_CONFIG } from "@constants/animation";
import { Text } from "./Text";

const Root = styled(motion.li)``;
type TProps = TItem & {
  selectedPath: string | null;
};
export const Item: FC<TProps> = (props) => {
  const { title, selectedPath } = props;
  const { isSelected, handlers } = useSelectHandlers(title);
  const key = titleToKebab(title);
  const handleOnSound = useOnSound();

  return (
    <Root
      className="flex relative shadow-teal-01-sm"
      {...handlers}
    >
      <InternalLink
        to={`/showcase?${SELECTED_KEY}=${key}&${IMG_KEY}=${1}`}
        onClick={handleOnSound}
        className="relative rounded-md w-full"
        style={{ height: ITEM_HEIGHT }}
      >
        <Container
          id={key}
          classValue="flex items-center justify-between absolute inset-0 px-4 text-lg w-full"
        >
          <AnimatePresence>
            {selectedPath !== key && (
              <motion.div
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
        {isSelected && <Select />}
      </InternalLink>
    </Root>
  );
};
