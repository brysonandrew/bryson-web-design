import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { Close as CloseIcon } from "@components/icons/Close";
import { useMothContext } from "@state/Context";
import { useOutsideClick } from "@hooks/useOutsideClick";
import type { FC } from "react";
import { useRef } from "react";
import type { TBaseIconMotionProps } from "@t/icons";
import { useFocusSound } from "@hooks/sounds/ui/useFocusSound";
import type { TMenu } from "@state/types";
import { CENTER } from "@constants/styles";
import type { TChildren } from "@t/index";

const Root = styled.div``;
const Position = styled.div``;
const Button = styled(motion.button)``;

type TProps = {
  name: TMenu;
  Icon: FC<TBaseIconMotionProps>;
  Menu: FC;
  children?: TChildren;
};
export const Control: FC<TProps> = ({
  name,
  Icon,
  Menu,
  children,
}) => {
  const context = useMothContext();
  const { menu, dispatch, context: audioContext } = context;
  const ref = useRef<HTMLDivElement>(null);

  const isOpen = name === menu;
  const handleSound = useFocusSound();
  const handleTap = async () => {
    await audioContext.resume();
    await handleSound();
    dispatch({ type: "menu", value: name });
  };
  useOutsideClick({
    ref,
    handler: () => {
      if (isOpen) {
        handleTap();
      }
    },
  });
  return (
    <Root className="flex flex-col" ref={ref}>
      <Position>
        <Button className={CENTER} onTap={handleTap}>
          {children}
          {isOpen ? (
            <CloseIcon />
          ) : (
            <Icon classValue="w-4" />
          )}
        </Button>
      </Position>
      <div className="absolute top-8 right-2">
        <div onPointerDown={(e) => e.stopPropagation()}>
          <AnimatePresence>
            {isOpen && <Menu />}
          </AnimatePresence>
        </div>
      </div>
    </Root>
  );
};
