import { type FC } from 'react';
import { useAutosize } from './useAutosize';
import { useViewport } from '@brysonandrew/viewport';
import {
  TChildrenElement,
  TDivMotionProps,
} from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';

type TProps = Omit<TDivMotionProps, 'children'> & {
  value: string;
  textarea: HTMLTextAreaElement | null;
  children(isInit: boolean): TChildrenElement;
};
export const Autosize: FC<TProps> = ({
  value,
  textarea,
  children,
  ...props
}) => {
  const { isResizing } = useViewport();
  const isInit = useAutosize({
    textarea,
    value,
    isResizing,
  });

  return (
    <motion.div
      layout
      className='_contact_autosize'
      {...props}
    >
      {children(isInit)}
    </motion.div>
  );
};
