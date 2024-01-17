import { HTMLMotionProps, SVGMotionProps } from 'framer-motion';
import {
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
  SourceHTMLAttributes,
  SVGAttributes,
} from 'react';

export type TElementProps = HTMLAttributes<HTMLElement>;

export type TDivProps = HTMLAttributes<HTMLDivElement>;

export type THeadingProps =
  HTMLAttributes<HTMLHeadingElement>;

export type TUlProps = HTMLAttributes<HTMLUListElement>;

export type TButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

export type TAnchorProps =
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type TParagraphProps =
  HTMLAttributes<HTMLParagraphElement>;

export type TImgProps = ImgHTMLAttributes<HTMLImageElement>;

export type TThProps =
  ThHTMLAttributes<HTMLTableCellElement>;

export type TTdProps =
  TdHTMLAttributes<HTMLTableCellElement>;

export type TSource =
  SourceHTMLAttributes<HTMLSourceElement>;

export type TSvgProps = SVGAttributes<SVGElement>;
