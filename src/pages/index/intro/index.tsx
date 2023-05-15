import { Tech } from "./tech";
import { Text } from "./Text";
import { ThinLineGap } from "@components/ThinLineGap";

export const Intro = () => (
  <div className="flex flex-col items-center">
    <Text />
    <ThinLineGap />
    <Tech />
  </div>
);
