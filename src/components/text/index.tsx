import clsx, { ClassValue } from "clsx";
import type { FC } from "react";

type TProps = { children: string; classValue?: ClassValue };
export const Text: FC<TProps> = ({
  classValue,
  children,
}) => (
  <h3
    className={clsx(
      "text-teal text-xs uppercase",
      classValue,
    )}
  >
    {children}
  </h3>
);
