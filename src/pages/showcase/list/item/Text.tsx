import { TextSm } from "@components/text/TextSm";
import type { FC } from "react";
import { Time } from "../../Time";
import type { TItem } from "@t/showcase";

type TProps = TItem;
export const Text: FC<TProps> = ({
  title,
  time,
  description,
}) => (
  <>
    <div className="flex flex-col lg:flex-row lg:items-center">
      <TextSm classValue="px-0">{title}</TextSm>
      <div className="hidden lg:block p-1" />
      <TextSm classValue="text-gray" layout>
        {description}
      </TextSm>
    </div>
    <div className="absolute top-0 right-0 py-4 px-4 lg:py-1">
      <Time time={time} />
    </div>
  </>
);
