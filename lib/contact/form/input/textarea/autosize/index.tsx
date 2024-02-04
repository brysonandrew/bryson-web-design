import { type FC } from 'react';
import { useAutosize } from './useAutosize';
import { useViewport } from '@brysonandrew/viewport';
import { TChildrenElement } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';

type TProps = {
  value: string;
  textarea: HTMLTextAreaElement | null;
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
      className='_contact_autosize'
    >
      {children(isInit)}
    </motion.div>
  );
};
