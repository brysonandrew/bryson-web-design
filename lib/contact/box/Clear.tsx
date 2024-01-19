import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useContact } from '@brysonandrew/lib/contact/context/useContact';
import { PRESENCE_OPACITY_DELAY } from '@brysonandrew/lib/animation/constants';
import { TFormKey } from '@brysonandrew/lib/contact/context/types';
import { resolveInteractiveLabels } from '@brysonandrew/lib/utils/attributes/resolveInteractiveLabels';
import { useApp } from '@brysonandrew/lib/context/app/useApp';
import { Cross } from '@brysonandrew/lib/gallery/components/icons';
import { TButtonMotionProps } from '@brysonandrew/lib/types/dom';
import { useDarkMode } from '@brysonandrew/lib/context/dark-mode/useDarkMode';

const Root = styled.div``;

type TProps = TButtonMotionProps & {
  onFocus(): void;
  name: TFormKey;
  isReady: boolean;
};
export const Clear: FC<TProps> = ({
  isReady,
  name,
  onFocus,
  title,
  ...props
}) => {
  const { COLOR, BORDER_RADIUS, Glow } = useApp();
  const { onForm } = useContact();
  const { isDarkMode } = useDarkMode();

  const handleClear = (_: MouseEvent) => {
    onForm({ [name]: '' });
    onFocus();
  };

  return (
    <Root className='absolute top-4 md:top-3.75 right-3.75 z-10'>
      <motion.button
        layout
        tabIndex={-1}
        type='button'
        className='relative dark:text-gray-3 text-gray-1'
        whileHover={{ opacity: 1 }}
        onTap={handleClear}
        {...resolveInteractiveLabels('Clear')}
        {...PRESENCE_OPACITY_DELAY}
        animate={{ opacity: isReady ? 0.8 : 0.2 }}
        style={{ borderRadius: BORDER_RADIUS.XL }}
        {...props}
      >
        <Glow
          color={COLOR[isDarkMode ? 'gray' : 'white-9']}
        >
          <Cross />
        </Glow>
      </motion.button>
    </Root>
  );
};
