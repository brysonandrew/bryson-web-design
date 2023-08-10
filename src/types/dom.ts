import { HTMLMotionProps } from 'framer-motion';

export type TMotionDivProps = HTMLMotionProps<'div'>;
export type TMotionButtonProps = HTMLMotionProps<'button'> & {
  title: string;
};
export type TMotionAnchorProps = HTMLMotionProps<'a'> & {
  title: string;
};

export type TRect = DOMRect | null;
