import { TEAL_GLOW } from '@pages/index/constants';
import { motion } from 'framer-motion';

export const Input = () => (
  <motion.div
    layoutId='CONTACT_FORM_INPUT_SELECT'
    className='absolute left-0 top-0 bottom-0 bg-teal w-2 z-50'
    {...TEAL_GLOW}
  />
);
