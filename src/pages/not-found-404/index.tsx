import { Shell } from "@components/Shell";
import { TextLg } from "@components/text/TextLg";
import { TextXl } from "@components/text/TextXl";

import { Space } from "@styles/decorators";

export const NotFound404 = () => (
  <Shell>
    <div className="flex flex-col items-center">
      <Space />
      <TextXl classValue="text-10xl lg:text-20xl">404</TextXl>
      <Space />
      <TextLg classValue="text-4xl lg:text-6xl">Nothing Here</TextLg>
    </div>
  </Shell>
);
