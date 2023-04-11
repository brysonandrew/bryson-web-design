import { Xp as Icon } from "./xp";
import type { FC } from "react";
import { Control } from "../control";
import { Options } from "./Options";
import { useMothContext } from "@moth-state/Context";

export const Shop: FC = () => {
  const { xp } = useMothContext();
  return (
    <Control name="shop" Icon={Icon} Menu={Options}>
      <>
        <div>{xp}</div>
        <div className="p-1" />
      </>
    </Control>
  );
};
