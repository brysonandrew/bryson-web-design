import { HTMLMotionProps } from 'framer-motion';
import { TTitleProps } from '.';

export type TMotionDivProps = HTMLMotionProps<'div'>;
export type TMotionButtonProps = HTMLMotionProps<'button'> &
  TTitleProps;
export type TMotionAnchorProps = HTMLMotionProps<'a'> &
  TTitleProps;
export type TMotionImgProps = HTMLMotionProps<'img'>;
export type TMotionInputProps = HTMLMotionProps<'input'>

export type TRect = DOMRect | null;
