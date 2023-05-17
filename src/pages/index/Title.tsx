import { ThinLineGap } from "@components/ThinLineGap";
import { TextXl } from "@components/text/TextXl";
import { WIDTH_CLASS } from "@styles/styles";
import { TChildren } from "@t/index";
import clsx from "clsx";
import { FC } from "react";

type TProps = { children: TChildren };
export const Title: FC<TProps> = ({ children }) => (
  <div
    className={clsx(
      "flex flex-col items-center",
      WIDTH_CLASS,
    )}
  >
    <TextXl>{children}</TextXl>
    <ThinLineGap />
  </div>
);
