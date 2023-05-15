import clsx from "clsx";
import { Space4 } from "./spaces/Space4";

export const ThinLineGap = () => (
  <>
    <Space4 />
    <hr
      className={clsx("flex w-full h-px bg-white-01 w-3/4")}
    />
    <Space4 />
  </>
);
