import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useContact } from '@brysonandrew/contact';
import { PRESENCE_OPACITY_DELAY } from '@brysonandrew/animation';
import { TFormKey } from '@brysonandrew/contact/config/types';
import { resolveInteractiveLabels } from '@brysonandrew/utils/attributes/resolveInteractiveLabels';
import { useApp } from '@brysonandrew/app';
import { TButtonMotionProps } from '@brysonandrew/config/types/dom';
import { CROSS_ICON, I } from '@brysonandrew/icons';


type TProps = TButtonMotionProps & {
  onFocus(): void;
  name: TFormKey;
  isReady: boolean;
};
export const Clear: FC<TProps> = ({
  isReady,
  name,
  onFocus,
  title,
  ...props
}) => {
  const { BORDER_RADIUS } = useApp();
  const { onForm } = useContact();

  const handleClear = (_: MouseEvent) => {
    onForm({ [name]: '' });
    onFocus();
  };

  return (
    <div className='_contact_clear'>
      <motion.button
        layout
        tabIndex={-1}
        type='button'
        className='_contact_clear-button'
        whileHover={{ opacity: 1 }}
        onTap={handleClear}
        {...resolveInteractiveLabels('Clear')}
        {...PRESENCE_OPACITY_DELAY}
        animate={{ opacity: isReady ? 0.8 : 0.2 }}
        style={{ borderRadius: BORDER_RADIUS.XL }}
        {...props}
      >
        <I classValue='clear-icon' icon={CROSS_ICON} />
      </motion.button>
    </div>
  );
};
