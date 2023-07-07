import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Metal } from '@components/metal';
import { Input as Select } from '@components/select/Input';
import { LABEL_CLASS, TFormKey } from '../config';
import { useContext } from '@state/Context';
import { Glow } from '@components/glow';
import {
  DISABLED_BOX_SHADOW,
  GLOW_BOX_SHADOW,
  PARENT_GLOW_PROPS,
} from '@constants/colors';
import { TChildren } from '@t/index';

const Root = styled(motion.label)``;

type TProps = {
  name: string;
  isFocused: boolean;
  isDisabled?: boolean;
  children: TChildren;
};
export const Box: FC<TProps> = ({
  name,
  isFocused,
  isDisabled,
  children,
}) => {
  return (
    <Root
      className={clsx(LABEL_CLASS, [
        isDisabled ? DISABLED_BOX_SHADOW : GLOW_BOX_SHADOW,
      ])}
      {...(isDisabled ? {} : PARENT_GLOW_PROPS)}
    >
      <Glow drop={2}>
        <Metal />
      </Glow>
      {isFocused && <Select key={name} />}
      {children}
    </Root>
  );
};
