import {
  HTMLMotionProps,
  MotionProps,
  SVGMotionProps,
} from 'framer-motion';
import { PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';
import { TClassValueProps, TTitleProps } from './main';

export type TDivMotionProps = PropsWithChildren<
  HTMLMotionProps<'div'>
> &
  TClassValueProps;

export type TSectionMotionProps = HTMLMotionProps<'hr'> &
  TClassValueProps;

export type TDivMotionNormalChildrenProps =
  PropsWithChildren<TDivMotionProps>;

export type TUlMotionProps = HTMLMotionProps<'ul'> &
  TClassValueProps;

export type TButtonMotionProps = HTMLMotionProps<'button'> &
  TTitleProps &
  TClassValueProps;
export type TAnchorMotionProps = HTMLMotionProps<'a'> &
  TTitleProps &
  TClassValueProps;
export type TImgMotionProps = HTMLMotionProps<'img'> &
  TClassValueProps;
export type TInputMotionProps = HTMLMotionProps<'input'> &
  TClassValueProps;

export type TTextareaMotionProps =
  HTMLMotionProps<'textarea'> & TClassValueProps;

export type THrMotionProps = HTMLMotionProps<'hr'> &
  TClassValueProps;

export type TSvgMotionProps =
  SVGMotionProps<SVGSVGElement> & TClassValueProps;

export type TLinkMotionProps = LinkProps &
  MotionProps &
  TTitleProps &
  TClassValueProps;
