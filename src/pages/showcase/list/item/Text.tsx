import { TextSm } from "@components/text/TextSm";
import type { TItem } from "@constants/showcase";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Time } from "../../Time";

type TProps = TItem;
export const Text: FC<TProps> = ({
  title,
  time,
  description,
}) => {
  return (
    <>
      <div className="flex items-center">
        <TextSm classValue="px-0">
          <motion.span className="truncate" layout>
            {title}
          </motion.span>
        </TextSm>
        <div className="p-1" />
        <TextSm classValue="text-gray" layout>
          <motion.span className="truncate" layout>
            {description}
          </motion.span>
        </TextSm>
      </div>
      <div className="p-1" />
      <div className="absolute top-0 right-0 py-2 px-4 bg-black">
        <Time time={time} />
      </div>
    </>
  );
};
