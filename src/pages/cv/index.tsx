import { useStyles } from "@css/useStyles";
import { Description } from "./Description";
import { Experience } from "./experience";
import { Header } from "./header";
import { Margin } from "./layout/Margin";
import { Page } from "./layout/Page";
import { Shell } from "./layout/Shell";
import { Space3 } from "@components/spaces/Space3";
import { Space } from "@components/spaces/Space";
import { Space4 } from "@components/spaces/Space4";
import { Invert } from "../../components/Invert";

export const Cv = () => {
  useStyles();
  return (
    <Invert>
      {(filter) => (
        <Shell>
          <Page style={{ filter }}>
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
          <div className="py-2" />
        </Shell>
      )}
    </Invert>
  );
};
