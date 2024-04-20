import { TTruthy } from "@brysonandrew/config-types/validation";
import { isFalsy } from "@brysonandrew/utils-validation/is-falsy";

export const isTruthy = (value?: unknown): value is TTruthy<typeof value> =>
  !isFalsy(value);
