import { TDimensions } from "@brysonandrew/measure";

type TConfig = number;
export const resolveSquare = (
  size: TConfig
):TDimensions => {
  return {
    width: size,
    height: size,
  };
};
