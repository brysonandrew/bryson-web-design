import { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";
import type { FC } from "react";
import { LighthouseCaptian } from "./LighthouseCaptian";

type TProps = {
  note: string;
};
export const Note: FC<TProps> = ({ note }) => {
  switch (note) {
    case LIGHTHOUSE_CAPTAIN_KEY: {
      return <LighthouseCaptian />;
    }
    default: {
      return <div>"..."</div>;
    }
  }
};
