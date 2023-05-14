import { TextSm } from "@components/text/TextSm";
import type { FC } from "react";
import { Time } from "../../Time";
import type { TItem } from "@t/showcase";
import { motion } from "framer-motion";

type TProps = TItem;
export const Text: FC<TProps> = ({
  title,
  time,
  description,
}) => (
  <>
    <div className="flex flex-col lg:flex-row lg:items-center">
      <TextSm classValue="px-0">{title}</TextSm>
      <div className="hidden px-2 lg:block lg:py-1" />
      <motion.p className="text-white-light" layout>
        {description}
      </motion.p>
    </div>
    <div className="absolute top-0 right-0 py-4 px-4 lg:py-1">
      <Time time={time} />
    </div>
  </>
);
