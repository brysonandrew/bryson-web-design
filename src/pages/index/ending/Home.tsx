import { type FC } from "react";
import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import clsx from "clsx";
import styled from "@emotion/styled";
import { ANCHOR_CLASS } from "./constants";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Fill } from "@components/metal/Fill";
import { Text } from "@components/text/Text";
import { Border as Select } from "@components/select/Border";
import { useHome } from "@hooks/useHome";

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<"div">;
export const Home: FC<TProps> = () => {
  const { handlers, isSelected } =
    useSelectHandlers("Home");

  const handleTap = useHome();

  return (
    <Root style={{ x: "-100%" }} {...handlers}>
      <Button
        onTap={handleTap}
        className={clsx(ANCHOR_CLASS, "")}
      >
        {isSelected ? <Select /> : null}
        <Fill inset={2} />
        <Text classValue="relative">Home</Text>
      </Button>
    </Root>
  );
};
