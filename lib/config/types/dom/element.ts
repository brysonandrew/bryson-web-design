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
import type { LinkProps } from 'react-router-dom';
import { TClassValueProps, TTitleProps } from './main';

export type TElementProps = HTMLAttributes<HTMLElement> &
  TClassValueProps;

export type TDivProps = HTMLAttributes<HTMLDivElement> &
  TClassValueProps;

export type THeadingProps =
  HTMLAttributes<HTMLHeadingElement> & TClassValueProps;

export type TLiProps = HTMLAttributes<HTMLLIElement>;

export type TUlProps = HTMLAttributes<HTMLUListElement> &
  TClassValueProps;

export type TButtonProps = TTitleProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  TClassValueProps;

export type TAnchorProps = TTitleProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  TClassValueProps;

export type TLinkProps = TTitleProps &
  LinkProps &
  TClassValueProps;

export type TParagraphProps =
  HTMLAttributes<HTMLParagraphElement> & TClassValueProps;

export type TImgProps =
  ImgHTMLAttributes<HTMLImageElement> & TClassValueProps;

export type TThProps =
  ThHTMLAttributes<HTMLTableCellElement> & TClassValueProps;

export type TTdProps =
  TdHTMLAttributes<HTMLTableCellElement> & TClassValueProps;

export type TSource =
  SourceHTMLAttributes<HTMLSourceElement> &
    TClassValueProps;

export type TSvgProps = SVGAttributes<SVGElement> &
  TClassValueProps;

export type TSvgCircleProps =
  SVGAttributes<SVGCircleElement> & TClassValueProps;

export type TSvgClipPathProps =
  SVGAttributes<SVGClipPathElement> & TClassValueProps;
