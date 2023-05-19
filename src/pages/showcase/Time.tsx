import { TextXs } from "@components/text/TextXs";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";

const CLASS = "mt-0.5 md:mt-0.5 lg:mt-0.5";

type TProps = { time?: Date; classValue?: ClassValue };
export const Time: FC<TProps> = ({ time, classValue }) => {
  const className = clsx(CLASS, classValue);
  if (!time)
    return <TextXs classValue={className}>Present</TextXs>;
  return (
    <TextXs classValue={className}>
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
