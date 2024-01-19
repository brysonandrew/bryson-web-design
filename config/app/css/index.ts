import { resolveVarCssRecord } from '@brysonandrew/lib/color/utils/resolveCssVarRecord';

const PLACEHOLDER_MD = 28;
const PLACEHOLDER_SM = 16;
const PLACEHOLDER = 8;

const resolveWidth = (value: number) => `${value * 24}px`;

const PLACEHOLDER_LOOKUP = {
  'placeholder-md': `scale(${PLACEHOLDER_MD})`,
  'placeholder-sm': `scale(${PLACEHOLDER_SM})`,
  placeholder: `scale(${PLACEHOLDER})`,
  'size-placeholder-md': `${resolveWidth(PLACEHOLDER_MD)}`,
  'size-placeholder-sm': `${resolveWidth(PLACEHOLDER_SM)}`,
  'size-placeholder': `${resolveWidth(PLACEHOLDER)}`,
};

export const PLACEHOLDER_VARS_CSS = resolveVarCssRecord(
  PLACEHOLDER_LOOKUP,
);
