import clsx, { ClassValue } from "clsx";
import type { FC } from "react";
import {
  TConfig,
  TEXT_CLASS_NAMES,
  TItem,
  resolveItems,
} from "./config";
import {
  CSSProperties,
  Fragment,
  createElement,
} from "react";
import { TChildren } from "@t/index";

type TProps = {
  style?: CSSProperties;
  children: TChildren;
  tag?:
    | keyof HTMLElementTagNameMap
    | keyof SVGElementTagNameMap;
  classValue?: ClassValue;
  classValues?: ClassValue[];
} & TConfig;
export const GlitchPorsalin: FC<TProps> = ({
  style = {},
  tag = "h1",
  offset,
  children,
  classValue,
  classValues = TEXT_CLASS_NAMES,
}) => {
  return (
    <>
      {resolveItems({ offset }).map(
        (
          [name, itemClassName, itemStyle, itemProps]: TItem,
          index: number,
        ) => (
          <Fragment key={name}>
            {createElement(
              tag,
              {
                className: clsx(
                  "text-xl leading-none",
                  classValues[index],
                  classValue,
                  itemClassName,
                ),
                style: {
                  letterSpacing: 2,
                  ...itemStyle,
                  ...style,
                },
                ...itemProps
              },
              children,
            )}
          </Fragment>
        ),
      )}
    </>
  );
};
