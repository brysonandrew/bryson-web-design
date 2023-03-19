import { useRef } from "react";
import type { FC, RefObject } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";
import type { TChildren } from "@t/index";
import { WIDTH } from "./constants";

type TProps = {
  left: string;
  root: RefObject<HTMLDivElement>;
  children: TChildren;
};
export const Section: FC<TProps> = ({
  left,
  root,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, {
  //   root,
  //   once: false,
  //   amount: "some",
  // });

  return (
    <motion.div
      ref={ref}
      className="relative bg-purple whitespace-nowrap"
      style={{
        left,
        width: WIDTH,
      }}
    >
      {children}
    </motion.div>
  );
};
