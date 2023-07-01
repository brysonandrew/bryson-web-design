import { TEAL_GLOW } from '@pages/index/constants';
import { motion } from 'framer-motion';

export const Input = () => (
  <motion.div
    initial={false}
    layoutId='CONTACT_FORM_INPUT_SELECT'
    className='absolute bg-teal z-50'
    style={{
      left: -1,
      top: -1,
      bottom: -1,
      width: 'calc(0.5rem + 4px)',
    }}
    {...TEAL_GLOW}
  />
);
