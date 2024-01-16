import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';
import { useContact } from '@pages/index/contact/context';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { IconGlow } from '@lib/components/interactive/IconGlow';
import { PRESENCE_OPACITY_DELAY } from '@lib/animation/constants';
import { TFormKey } from '@pages/contact/config';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { useApp } from '@lib/context/app/useApp';
import { Cross } from '@lib/gallery/components/icons';

const Root = styled.div``;

type TProps = HTMLMotionProps<'button'> & {
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
  const { COLOR, BORDER_RADIUS } = useApp();
  const { onForm } = useContact();
  const { isDarkMode } = useDarkMode();

  const handleClear = (_: MouseEvent) => {
    onForm({ [name]: '' });
    onFocus();
  };

  return (
    <Root className='absolute top-4 md:top-3.75 right-3.75 z-10'>
      <motion.button
        tabIndex={-1}
        type='button'
        className='relative dark:text-gray-3 text-gray-1 dark:bg-black-02 bg-white-9-02'
        whileHover={{ opacity: 1 }}
        onTap={handleClear}
        {...resolveInteractiveLabels('Clear')}
        {...PRESENCE_OPACITY_DELAY}
        animate={{ opacity: isReady ? 0.8 : 0.2 }}
        style={{ borderRadius: BORDER_RADIUS.XL }}
        {...props}
      >
        <IconGlow
          Icon={Cross}
          color={COLOR[isDarkMode ? 'gray' : 'white-9']}
        /> 
      </motion.button>
    </Root>
  );
};
