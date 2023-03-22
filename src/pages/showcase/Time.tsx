import { TextSm } from "@components/text/TextSm";
import type { FC } from "react";

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  if (!time)
    return <TextSm classValue="px-0">Present</TextSm>;
  return (
    <TextSm classValue="px-0">
      {typeof time === "undefined"
        ? "Present"
        : new Intl.DateTimeFormat("en-UK", {
            month: "short",
            year: "numeric",
          }).format(time)}
    </TextSm>
  );
};
