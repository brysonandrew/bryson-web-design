import type { FC } from "react";
import clsx from "clsx";
import { Slider } from "@moth-components/inputs";
import type { TSliderProps } from "@moth-components/inputs/slider";
type TProps = TSliderProps;
export const Item: FC<TProps> = (props) => (
  <li
    className={clsx(
      "flex flex-col relative w-full",
    )}
  >
    <div className="flex justify-between">
      <div>{props.name}</div>
      <div>{props.value}</div>
    </div>
    <div className="py-1" />
    <div
      className={clsx(
        "flex relative shadow-purple h-2 w-full",
      )}
    >
      <Slider {...props} />
    </div>
  </li>
);
