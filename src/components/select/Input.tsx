import { PRESENCE_OPACITY } from '@constants/animation';
import {
  TEAL_GLOW,
  resolveDropShadow,
} from '@constants/colors';
import { motion } from 'framer-motion';

export const Input = () => (
  <motion.div
    layoutId='CONTACT_FORM_INPUT_SELECT'
    className='absolute -left-px -top-px -bottom-px bg-teal z-50'
    style={{
      width: 'calc(0.5rem + 4px)',
    }}
    variants={{
      hover: {
        opacity: 1,
        filter: resolveDropShadow(20, 'teal'),
      },
      animate: {
        opacity: 1,
        filter: resolveDropShadow(10, 'teal'),
      },
    }}
  />
);
