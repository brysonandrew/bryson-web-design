import { VolumeOn as Icon } from "@moth-components/icons/VolumeOn";
import type { FC } from "react";
import { Options } from "./Options";
import { Control } from "../control";

export const Sound: FC = () => (
  <Control name="sound" Icon={Icon} Menu={Options} />
);
