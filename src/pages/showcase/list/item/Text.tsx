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
    <motion.div
      className="flex flex-col lg:flex-row lg:items-end -mt-0.5"
      layout
    >
      <TextSm>{title}</TextSm>
      <TextSm
        classValue="text-white-light ml-3.5 lg:ml-0"
        layout
      >
        {description}
      </TextSm>
    </motion.div>
    <motion.div
      className="absolute top-0 right-0 py-4 px-4 lg:py-1"
      layout
    >
      <Time time={time} />
    </motion.div>
  </>
);
