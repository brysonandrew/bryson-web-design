import {
  TEAL_GLOW_BOX_SHADOW,
  TPartialTealGlowConfigOptions,
  resolveTealGlow,
} from '@constants/colors';
import styled from '@emotion/styled';
import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const SHARED_CLASS = 'absolute inset-0';

const Root = styled(motion.div)``;
const Core = styled(motion.div)``;

type TProps = TPartialTealGlowConfigOptions &
  TClassValueProps;
export const Glow: FC<TProps> = ({
  classValue,
  ...partial
}) => {
  return (
    <Root
      className={clsx(
        TEAL_GLOW_BOX_SHADOW,
        SHARED_CLASS,
        classValue,
      )}
    >
      <Core
        {...resolveTealGlow({
          classValue: clsx(SHARED_CLASS, classValue),
          partial,
        })}
      />
    </Root>
  );
};
