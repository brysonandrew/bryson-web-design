import { TextXs } from "@components/text/TextXs";
import type { FC } from "react";

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  if (!time) return <TextXs>Present</TextXs>;
  return (
    <TextXs>
      {typeof time === "undefined"
        ? "Present"
        : new Intl.DateTimeFormat("en-UK", {
            month: "short",
            year: "numeric",
          }).format(time)}
    </TextXs>
  );
};
