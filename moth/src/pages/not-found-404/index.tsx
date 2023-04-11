import { Shell } from "@moth-components/shell";
import { Space } from "@moth-components/spaces/Space";
import { TextLg } from "@moth-components/text/TextLg";
import { TextXl } from "@moth-components/text/TextXl";
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
