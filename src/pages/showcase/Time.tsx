import { Sub } from "@components/text/Sub";
import { motion } from "framer-motion";
import type { FC } from "react";

const CLASS = "mt-1.5 md:mt-2.5"

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  if (!time)
    return <Sub classValue={CLASS}>Present</Sub>;
  return (
    <Sub classValue={CLASS}>
      <motion.span className="truncate" layout>
        {typeof time === "undefined"
          ? "Present"
          : new Intl.DateTimeFormat("en-UK", {
              month: "short",
              year: "numeric",
            }).format(time)}
      </motion.span>
    </Sub>
  );
};
