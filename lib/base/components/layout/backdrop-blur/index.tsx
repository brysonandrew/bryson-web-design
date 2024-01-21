import type { FC } from 'react';
import styled from '@emotion/styled';
import { TDivMotionProps } from '@brysonandrew/base/types/dom';
import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps;
export const BackdropBlur: FC<TProps> = ({
  children,
  ...props
}) => {
  const { BORDER_RADIUS, Texture, Glow, COLOR } = useApp();

  return (
    <Root
      whileHover='hover'
      className='backdrop-blur-sm py-1 px-2'
      {...props}
    >
      <>
        <Glow
          color={COLOR.accent}
          box={2}
          style={{
            borderRadius: BORDER_RADIUS.XL,
          }}
        >
          <Texture
            classValue='opacity-50'
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }}
          />
        </Glow>
        <div className='relative'>{children}</div>
      </>
    </Root>
  );
};
