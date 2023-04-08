import { Shell } from "@components/shell";
import { Space } from "@components/spaces/Space";
import { TextLg } from "@components/text/TextLg";
import { TextXl } from "@components/text/TextXl";
import clsx from "clsx";

export const NotFound404 = () => (
  <Shell>
    <div className={clsx("flex flex-col items-center")}>
      <Space />
      <TextXl>404</TextXl>
      <Space />
      <TextLg>Nothing Here</TextLg>
    </div>
  </Shell>
);
