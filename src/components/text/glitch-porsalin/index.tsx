import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC ,
  CSSProperties} from "react";
import type {
  TConfig,
  TItem} from "./config";
import {
  TEXT_CLASS_NAMES,
  resolveItems,
} from "./config";
import {
  Fragment,
  createElement,
} from "react";
import type { TChildren } from "@t/index";

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
}) => (
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
                  "text-inherit leading-none",
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
