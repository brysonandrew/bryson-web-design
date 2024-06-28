import { isDefined } from "@brysonandrew/utils-validation/is/defined";
import { isNumber } from "@brysonandrew/utils-validation/is/number";

export type TTimeout = ReturnType<Window['setTimeout']>;
export const isTimeout = (value?: unknown | TTimeout): value is TTimeout => {
  if (isDefined(value) && isNumber(value)) return true;
  return false;
};
