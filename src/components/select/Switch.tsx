import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { OpenInNew } from '@components/icons/OpenInNew';
import { Gallery } from '@components/icons/Gallery';
import { resolveCursorKeyFromHoverKey } from './config';
import { MotionStyle } from 'framer-motion';

export const Switch = () => {
  const {
    hoverKey,
    darkMode: { isDarkMode },
  } = useContext();
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  const iconMixBlend = isDarkMode
    ? 'hard-light'
    : 'luminosity';
  switch (cursorKey) {
    case 'open-in-new': {
      return (
        <Sight
          animate={{
            scale: 1.4,
            mixBlendMode: iconMixBlend,
          }}
        >
          <OpenInNew />
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
    case 'big': {
      return <Sight animate={{ opacity: 0.4, scale: 2 }} />;
    }
    case 'none': {
      return <Sight animate={{ opacity: 0, scale: 0 }} />;
    }
    default:
      return <Sight animate={{ scale: 0.2 }} />;
  }
};
