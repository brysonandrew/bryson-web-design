import { BigGear as Icon } from "@moth-components/icons/BigGear";
import { Control } from "../control";
import { Options } from "./Options";

export const Menu = () => (
  <Control name="menu" Icon={Icon} Menu={Options} />
);
