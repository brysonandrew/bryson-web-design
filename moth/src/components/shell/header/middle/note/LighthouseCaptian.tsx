import type { FC } from "react";
import { Item } from "./Item";

export const LighthouseCaptian: FC = () => (
    <div>
      <ul>
        <Item
          title="Lighthouse Captian"
          text="You have ruined myself and my friends beyond repair"
        />
        <div className="p-1" />
        <Item
          title="Lighthouse Captian"
          text="You have made me a slave to be ruled by the
          others, I have watched you decimate my race to a
          handful..."
        />
        <div className="p-1" />
        <Item
          title="Lighthouse Captian"
          text="I have only one question for you, moth..."
        />
        <div className="p-1" />
        <Item title="Lighthouse Captian" text="...Why?" />
        <div className="p-4" />
        <Item title="Moth" text="'cause the light was on" />
      </ul>
    </div>
  );
