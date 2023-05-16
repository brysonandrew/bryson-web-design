import { TextXs } from "@components/text/TextXs";
import { motion } from "framer-motion";
import type { FC } from "react";

const CLASS = "mt-0.5 md:mt-0.5 lg:mt-0.5"

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  if (!time)
    return <TextXs classValue={CLASS}>Present</TextXs>;
  return (
    <TextXs classValue={CLASS}>
      <motion.span className="truncate" layout>
        {typeof time === "undefined"
          ? "Present"
          : new Intl.DateTimeFormat("en-UK", {
              month: "short",
              year: "numeric",
            }).format(time)}
      </motion.span>
    </TextXs>
  );
};
