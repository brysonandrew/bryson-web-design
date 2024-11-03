import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { CONTACT_FORM_FOOTER } from 'lib/copy/base';
import { Contact } from '@brysonandrew/contact';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <motion.div
      className="w-core title-main will-change-transform"
      style={style}
    >
      <Contact footerInfo={CONTACT_FORM_FOOTER} />
    </motion.div>
  );
};
