import { motion } from 'framer-motion';
import { FC } from 'react';
import { P_5 } from '@lib/components/layout/space/P_5';
import { TBaseIconProps } from '@lib/types/dom/icon';
import { TRANSITION } from '@lib/constants/animation';
import { P1 } from '@lib/components/layout/space/P1';
import { TChildren } from '@lib/types/dom/main';
import { I } from '@lib/components/decoration/Icon';

type TProps = {
  children: TChildren;
  Icon?: FC<TBaseIconProps>;
  iconStr?: string;
};
export const IconWithText: FC<TProps> = ({
  Icon,
  iconStr,
  children,
}) => {
  return (
    <>
      <P_5 />
      <motion.div className='relative text-main row gap-1.5 z-50'>
        {iconStr && <I classValue="text-current" icon={iconStr} />}
        {Icon && <Icon classValue='w-4 h-4' />}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ...TRANSITION, delay: 0.4 },
          }}
          className='text-xl whitespace-nowrap'
        >
          {children}
        </motion.p>
        {/* <ThinLine classValue='absolute left-0 bottom-0 w-full via-current' /> */}
      </motion.div>
      <P_5 />
    </>
  );
};
