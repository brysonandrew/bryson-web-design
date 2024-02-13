import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { TDivMotionProps } from '@brysonandrew/config-types/dom';
import { PALETTE_COLORS } from '@pages/_workshop/design/config/constants';
import { useApp } from '@brysonandrew/app';
import clsx from 'clsx';

type TProps = TDivMotionProps & {
  typographies: string[];
};
export const Typographies: FC<TProps> = ({
  title,
  typographies,
  ...props
}) => {
  const { COLOR } = useApp();
  return (
    <motion.div {...props}>
      {typographies.map((titleKey) => (
        <ul key={titleKey} className='row-start gap-2'>
          {PALETTE_COLORS.filter((v) => v !== title).map(
            (textTitle) => (
              <li
                key={textTitle}
                className={clsx('relative', titleKey)}
                style={{
                  color: COLOR[textTitle],
                }}
              >
                {titleKey === null ? textTitle : 'abc'}
              </li>
            ),
          )}
        </ul>
      ))}
    </motion.div>
  );
};
