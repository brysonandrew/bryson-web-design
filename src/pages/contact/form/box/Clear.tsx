import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';
import { useContext } from '@state/Context';
import { Cross } from '@components/icons/Cross';
import { IconGlow } from '@components/buttons/IconGlow';
import { HIGHLIGHT } from '@components/filters/presets';
import { PRESENCE_OPACITY_DELAY } from '@constants/animation';
import { TFormKey } from '@pages/contact/config';

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
  ...props
}) => {
  const { dispatch } = useContext();

  const handleClear = (_: MouseEvent) => {
    dispatch({
      type: 'contact-form',
      value: { [name]: '' },
    });
    onFocus();
  };

  return (
    <Root className='absolute top-3.75 right-3.75 z-10'>
      <motion.button
        type='button'
        className='relative text-gray'
        whileHover={{ filter: HIGHLIGHT }}
        onTap={handleClear}
        {...PRESENCE_OPACITY_DELAY}
        animate={{ opacity: isReady ? 1 : 0.2 }}
        {...props}
      >
        <IconGlow Icon={Cross} color='gray' />
      </motion.button>
    </Root>
  );
};
