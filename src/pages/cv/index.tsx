import { Space2 } from "@components/spaces/Space2";
import { useStyles } from "@styles/useStyles";
import { Description } from "./Description";
import { Experience } from "./experience";
import { Header } from "./header";
import { Margin } from "./layout/Margin";
import { Page } from "./layout/Page";
import { Shell } from "./layout/Shell";

export const Cv = () => {
  useStyles();
  return (
    <Shell>
      <Page>
        <Margin>
          <Header />
        </Margin>
        <Space2 />
        <Margin>
          <Space2 />
          <Description />
          <Space2 />
          <hr className="bg-white-02 w-full h-px" />
          <Space2 />
          <Experience />
        </Margin>
      </Page>
    </Shell>
  );
};
