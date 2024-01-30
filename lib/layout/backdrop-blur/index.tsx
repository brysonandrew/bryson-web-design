import type { FC } from 'react';
import styled from '@emotion/styled';
import { TDivMotionProps } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps;
export const BackdropBlur: FC<TProps> = ({
  children,
  ...props
}) => {
  const { BORDER_RADIUS, Back, LIGHT, COLOR } = useApp();

  return (
    <Root
      whileHover='hover'
      className='backdrop-blur-sm'
      style={{
        borderRadius: BORDER_RADIUS.XL,
      }}
      {...props}
    >
      <>
        {LIGHT ? (
          <LIGHT.Back
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }}
          />
        ) : (
          <Back
            classValue='opacity-50'
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }}
          />
        )}
        <div className='relative'>{children}</div>
      </>
    </Root>
  );
};
