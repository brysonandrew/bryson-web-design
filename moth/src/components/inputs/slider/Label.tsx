import type { FC } from "react";
import clsx from "clsx";

type TProps = {
  prefix: string;
  value: number;
};
export const Label: FC<TProps> = ({ prefix, value }) => (
  <div>
    <h4 className="text-sm text-white-darkest truncate">
      {[prefix, value ?? null].filter(Boolean).join(" - ")}
    </h4>
  </div>
);
