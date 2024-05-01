import { TFalsy } from "@brysonandrew/config-types";

export const isFalsy = (
  value?: unknown
): value is TFalsy => {
  if (!value) {
    return true;
  }
  return false;
};
