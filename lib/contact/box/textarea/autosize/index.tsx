import { type FC } from 'react';
import { useAutosize } from './useAutosize';
import { useViewport } from '@brysonandrew/viewport';
import { TChildrenElement } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import { TUseInput } from '@brysonandrew/contact/hooks/useInput';

type TProps =
  TUseInput<HTMLTextAreaElement>['inputProps'] & {
    textarea: HTMLTextAreaElement | null;
    children(isInit: boolean): TChildrenElement;
  };
export const Autosize: FC<TProps> = ({
  value,
  textarea,
  children,
  style,
}) => {
  const { isResizing } = useViewport();

  const isInit = useAutosize({
    textarea,
    value,
    isResizing,
  });

  return (
    <motion.div style={style} layout className='autosize'>
      {children(isInit)}
    </motion.div>
  );
};
