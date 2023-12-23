import { HTMLMotionProps } from 'framer-motion';
import { TTitleProps } from '.';
import { ClassValue } from 'clsx';
import {
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
  SourceHTMLAttributes,
} from 'react';

export type TDivMotionProps = HTMLMotionProps<'div'>;

export type TMotionUlProps = HTMLMotionProps<'ul'>;

export type TButtonMotionProps = HTMLMotionProps<'button'> &
  TTitleProps;
export type TAnchorMotionProps = HTMLMotionProps<'a'> &
  TTitleProps;
export type TMotionImgProps = HTMLMotionProps<'img'>;
export type TMotionInputProps = HTMLMotionProps<'input'>;

export type TTextareaProps = HTMLMotionProps<'textarea'>;

export type TRect = DOMRect | null;

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

export type TClassValueProps = { classValue?: ClassValue };

export type TThProps =
  ThHTMLAttributes<HTMLTableCellElement>;

export type TTdProps =
  TdHTMLAttributes<HTMLTableCellElement>;

export type TSource =
  SourceHTMLAttributes<HTMLSourceElement>;
