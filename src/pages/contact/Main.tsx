import type { FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TPartialParallaxMotionProps } from '@brysonandrew/parallax/config';
import { Contact } from '@brysonandrew/contact';
import { CONTACT_FORM_FOOTER } from '@app/copy';

const Root = styled(motion.div)``;

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root
      className='w-core title-main will-change-transform'
      style={style}
    >
      <Contact footerInfo={CONTACT_FORM_FOOTER} />
    </Root>
  );
};
