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
    <div className="flex flex-col lg:flex-row lg:items-end -mt-0.5">
      <TextSm>{title}</TextSm>
      <motion.p
        className="text-white-light text-sm ml-3.5 md:text-md lg:text-lg xl:text-xl lg:ml-0"
        layout
      >
        {description}
      </motion.p>
    </div>
    <div className="absolute top-0 right-0 py-4 px-4 lg:py-1">
      <Time time={time} />
    </div>
  </>
);
