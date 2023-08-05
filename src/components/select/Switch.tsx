import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { OpenInNew } from '@components/icons/OpenInNew';
import { Gallery } from '@components/icons/Gallery';
import { resolveCursorKeyFromHoverKey } from './config';
import { TMixblendModeKey } from '@t/css';
import { motion } from 'framer-motion';
import { TRANSITION } from '@constants/animation';

export const Switch = () => {
  const { hoverKey } = useContext();
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  const secondaryKey = resolveCursorKeyFromHoverKey(
    hoverKey,
    true,
  );

  const iconMixBlend: TMixblendModeKey = 'normal';

  switch (cursorKey) {
    case 'open-in-new': {
      return (
        <Sight
          animate={{
            top: -60,
            left: 28,
            scale: 1.2,
            mixBlendMode: iconMixBlend,
          }}
        >
          <div className='center overflow-hidden'>
            <OpenInNew classValue='text-color-4' />
            <motion.code
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: '0.5rem',
                y: '-50%',
                transition: { ...TRANSITION, delay: 0.4 },
              }}
              className='absolute left-full top-1/2 text-color-1 text-2xl'
            >
              {secondaryKey}
            </motion.code>
          </div>
        </Sight>
      );
    }
    case 'gallery': {
      return (
        <Sight
          animate={{ scale: 2, mixBlendMode: iconMixBlend }}
        >
          <Gallery />
        </Sight>
      );
    }
    case 'project': {
      return (
        <Sight animate={{ opacity: 0.1, scale: 2.8 }} />
      );
    }
    case 'big': {
      return <Sight animate={{ opacity: 0.1, scale: 2 }} />;
    }
    case 'none': {
      return <Sight animate={{ opacity: 0, scale: 0 }} />;
    }
    default:
      return <Sight animate={{ scale: 0.2 }} />;
  }
};
