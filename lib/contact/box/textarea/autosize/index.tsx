import { type FC } from 'react';
import { useAutosize } from './useAutosize';
import { useViewport } from '@brysonandrew/viewport';
import { TChildrenElement } from '@brysonandrew/base/types/dom';
import { motion } from 'framer-motion';

type TProps = {
  textarea: HTMLTextAreaElement | null;
  value: string;
  children(isInit: boolean): TChildrenElement;
};
export const Autosize: FC<TProps> = ({
  value,
  textarea,
  children,
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
      className='autosize'
    >
      {children(isInit)}
    </motion.div>
  );
};
