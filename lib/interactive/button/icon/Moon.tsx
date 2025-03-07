import { motion } from 'framer-motion';
import {
  TClassValue,
  TSvgMotionProps,
} from '@brysonandrew/config-types';
import { FC } from 'react';
import { cx } from 'class-variance-authority';

type TProps = TSvgMotionProps & {
  classValue?: TClassValue;
};
export const Moon: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <motion.svg
    className={cx(classValue)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    transform="rotate(25)"
    {...props}
  >
    <path d="M12.97 3a8.02 8.02 0 0 0-4.054 7c0 4.418 3.522 8 7.866 8c1.146 0 2.236-.25 3.218-.698C18.39 19.544 15.787 21 12.849 21C7.962 21 4 16.97 4 12s3.962-9 8.849-9h.12Z" />
  </motion.svg>
);
