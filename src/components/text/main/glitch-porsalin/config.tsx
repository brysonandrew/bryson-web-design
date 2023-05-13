import clsx from "clsx";
import { CSSProperties, HTMLProps, SVGProps } from "react";

export const MIX_BLEND = "mix-blend-lighten";
const DEFAULT_MARGIN_OFFSET = 0.5;
export type TConfig = {
  offset?: number;
};
type TResolverType = Required<Pick<TConfig, "offset">>;
export const resolveMarginPercent = ({
  offset,
}: TResolverType) => `${offset}%`;
export const resolveNegativeMarginPercent = ({
  offset,
}: TResolverType) => `${-offset}%`;
export const SHIFT = ({ offset }: TResolverType) =>
  `${-offset * 2}%`;

export type TItem = [
  string,
  string,
  CSSProperties?,
  (HTMLProps<string> | SVGProps<string>)?,
];
const resolveNegativeOffset = ({
  offset,
}: TResolverType) => {
  const negativeMargin = resolveNegativeMarginPercent({
    offset,
  });
  return {
    marginTop: negativeMargin,
    marginLeft: negativeMargin,
    transform: `translate(${-offset} ${-offset})`,
  };
};
const resolveOffset = ({ offset }: TResolverType) => {
  const margin = resolveMarginPercent({ offset });
  return {
    marginTop: margin,
    marginLeft: margin,
  };
};
export const resolveItems = ({
  offset = DEFAULT_MARGIN_OFFSET,
}: TConfig): TItem[] => [
  [
    "Blue",
    clsx(`absolute`, MIX_BLEND),
    resolveOffset({ offset }),
    { transform: `translate(${offset} ${offset})` },
  ],
  [
    "Red",
    clsx(`absolute`, MIX_BLEND),
    resolveNegativeOffset({ offset }),
    { transform: `translate(${-offset} ${-offset})` },
  ],
  ["Teal", clsx("relative", MIX_BLEND)],
];

export const TEXT_CLASS_NAMES = [
  "text-blue",
  "text-red",
  "text-teal",
];

export const STROKE_CLASS_NAMES = [
  "stroke-blue",
  "stroke-red",
  "stroke-teal",
];

export const FILL_CLASS_NAMES = [
  "fill-blue",
  "fill-red",
  "fill-teal",
];
