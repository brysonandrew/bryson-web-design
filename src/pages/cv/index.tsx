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
import { ChangeEvent, useState } from "react";

export const Cv = () => {
  useStyles();
  const [invert, setInvert] = useState(0);
  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInvert(+value);
  };

  return (
    <Shell>
      <Page style={{ filter: `invert(${invert}%)` }}>
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
      <label className="flex items-center px-2 py-1 w-24">
        <input
          min="0"
          max="100"
          step="1"
          type="range"
          onChange={handleChange}
        />
        <div className="p-1" />
        <div>{invert}%</div>
      </label>
    </Shell>
  );
};
