import { Shell } from "@components/Shell";
import { Shell as MainShell } from "@main/Shell";
import { ID } from "@components/effects/displacement";
import { Space } from "@components/spaces/Space";
import { TextLg } from "@components/text/TextLg";
import { TextXl } from "@components/text/TextXl";
import { resolveUrlId } from "@utils/resolveUrlId";
import clsx from "clsx";

export const NotFound404 = () => (
  <MainShell>
    <Shell>
      <div
        className={clsx("flex flex-col items-center")}
        style={{ filter: resolveUrlId(ID) }}
      >
        <Space />
        <TextXl classValue="text-10xl lg:text-20xl">
          404
        </TextXl>
        <Space />
        <TextLg classValue="text-4xl lg:text-6xl">
          Nothing Here
        </TextLg>
      </div>
    </Shell>
  </MainShell>
);
