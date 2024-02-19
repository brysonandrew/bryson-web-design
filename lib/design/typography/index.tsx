import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { TDivMotionProps } from '@brysonandrew/config-types/dom';
import { useApp } from '@brysonandrew/app';
import clsx from 'clsx';
import { PALETTE_COLORS } from '@brysonandrew/design/config/constants';

type TProps = TDivMotionProps & {
  typographies: string[];
};
export const DesignTypography: FC<TProps> = ({
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
