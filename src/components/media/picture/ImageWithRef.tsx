import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { forwardRef } from 'react';

const Root = styled(motion.img)``;

type TProps = HTMLMotionProps<'img'>;
export const ImageWithRef = forwardRef<
  HTMLImageElement,
  TProps
>((props, ref) => <Root ref={ref} {...props} />);
