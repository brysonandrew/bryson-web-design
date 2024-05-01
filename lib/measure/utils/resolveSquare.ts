import { TDimensions } from '@brysonandrew/config-types';

type TConfig = number;
export const resolveSquare = (
  size: TConfig
):TDimensions => {
  return {
    width: size,
    height: size,
  };
};
