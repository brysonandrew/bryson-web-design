import { motion } from "framer-motion";
import { BarsLoader } from "@components/icons/BarsLoader";
import { Warning } from "@components/icons/Warning";
import { Error } from "@components/icons/Error";
import clsx from "clsx";
import { Mic } from "@components/icons/Mic";
import type { TVoiceStateKey } from "./config";
import COLORS from "@windi/config-colors.json";
import { CENTER_CHILD, MD } from "@constants/styles";

export const resolveStateColor = (
  state: TVoiceStateKey,
) => {
  switch (state) {
    case "idle":
      return COLORS["gray"];
    case "ready":
      return COLORS["blue"];
    case "receiving":
      return COLORS["purple"];
    case "ended":
      return COLORS["blue"];
    case "no-match":
      return COLORS["yellow"];
    case "error":
      return COLORS["red"];
  }
};
export const resolveStateIcon = (state: TVoiceStateKey) => {
  switch (state) {
    case "idle":
      return <Mic classValue={clsx(MD)} />;
    case "ready":
      return (
        <div>
          <motion.div
            initial={false}
            className={clsx("bg-blue", CENTER_CHILD, MD)}
            animate={{
              opacity: [1, 0, 1],
              scale: [0, 1, 0],
              transition: {
                times: [0, 0.99, 1],
                duration: Infinity,
              },
            }}
          />
          <Mic classValue={clsx(MD)} />
        </div>
      );
    case "receiving":
      return <BarsLoader classValue={MD} />;
    case "no-match":
      return <Warning classValue={MD} />;
    case "error":
      return <Error classValue={MD} />;
  }
};
