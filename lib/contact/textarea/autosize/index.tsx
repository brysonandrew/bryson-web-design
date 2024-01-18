import { type FC } from 'react';
import { useAutosize } from './useAutosize';
import { useViewport } from 'lib/context/viewport/useViewport';
import { TChildrenElement } from 'lib/types/dom';
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
      className='input-shell overflow-hidden'
    >
      {children(isInit)}
    </motion.div>
  );
};
