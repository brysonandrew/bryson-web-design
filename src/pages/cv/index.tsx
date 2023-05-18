import { Space2 } from "@components/spaces/Space2";
import { useStyles } from "@styles/useStyles";
import { Description } from "./Description";
import { Experience } from "./experience";
import { Header } from "./header";
import { Margin } from "./layout/Margin";
import { Page } from "./layout/Page";
import { Shell } from "./layout/Shell";
import { Space3 } from "@components/spaces/Space3";
import { Space } from "@components/spaces/Space";
import { Space4 } from "@components/spaces/Space4";

export const Cv = () => {
  useStyles();
  return (
    <Shell>
      <Page>
        <Margin>
          <Header />
        </Margin>
        <Space4 />
        <Margin>
          <Description />
        </Margin>
        <Space3 />
        <Margin>
          <hr className="bg-white-02 w-full h-px" />
        </Margin>
        <Space />
        <Experience />
      </Page>
    </Shell>
  );
};
