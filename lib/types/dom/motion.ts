import {
  HTMLMotionProps,
  MotionProps,
  SVGMotionProps,
} from 'framer-motion';
import { PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';
import { TTitleProps } from './main';

export type TDivMotionProps = PropsWithChildren<
  HTMLMotionProps<'div'>
>;

export type TDivMotionNormalChildrenProps =
  PropsWithChildren<HTMLMotionProps<'div'>>;

export type TUlMotionProps = HTMLMotionProps<'ul'>;

export type TButtonMotionProps = HTMLMotionProps<'button'> &
  TTitleProps;
export type TAnchorMotionProps = HTMLMotionProps<'a'> &
  TTitleProps;
export type TImgMotionProps = HTMLMotionProps<'img'>;
export type TInputMotionProps = HTMLMotionProps<'input'>;

export type TTextareaMotionProps =
  HTMLMotionProps<'textarea'>;

export type TSvgMotionProps = SVGMotionProps<SVGSVGElement>;

export type TLinkMotionProps = LinkProps &
  MotionProps &
  TTitleProps;
