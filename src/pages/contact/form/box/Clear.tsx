import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';
import { useContext } from '@context/domains/contact/Context';
import { useContext as useDarkModeContext } from '@context/dark-mode/Context';
import { Cross } from '@components/icons/gallery/Cross';
import { IconGlow } from '@components/buttons/IconGlow';
import { HIGHLIGHT } from '@components/filters/presets';
import { PRESENCE_OPACITY_DELAY } from '@constants/animation';
import { TFormKey } from '@pages/contact/config';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

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
  const { dispatch } = useContext();
  const {
    darkMode: { isDarkMode },
  } = useDarkModeContext();

  const handleClear = (_: MouseEvent) => {
    dispatch({
      type: 'contact-form',
      value: { [name]: '' },
    });
    onFocus();
  };

  return (
    <Root className='absolute top-4 md:top-3.75 right-3.75 z-10'>
      <motion.button
        tabIndex={-1}
        type='button'
        className='relative dark:text-gray-3 text-gray-1 dark:bg-black-02 bg-white-02 rounded-full'
        whileHover={{ filter: HIGHLIGHT }}
        onTap={handleClear}
        {...resolveInteractiveLabels('Clear')}
        {...PRESENCE_OPACITY_DELAY}
        animate={{ opacity: isReady ? 1 : 0.2 }}
        {...props}
      >
        <IconGlow
          Icon={Cross}
          color={isDarkMode ? 'gray' : 'white'}
        />
      </motion.button>
    </Root>
  );
};
