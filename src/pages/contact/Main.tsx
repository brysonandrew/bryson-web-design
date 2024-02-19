import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/parallax/config';
import { Contact } from '@brysonandrew/contact';
import { CONTACT_FORM_FOOTER } from '@app/copy';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <motion.div
      className='w-core title-main will-change-transform'
      style={style}
    >
      <Contact footerInfo={CONTACT_FORM_FOOTER} />
    </motion.div>
  );
};
