import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { OpenInNew } from '@components/icons/OpenInNew';
import { Gallery } from '@components/icons/Gallery';
import { resolveCursorKeyFromHoverKey } from './config';

export const Switch = () => {
  const { hoverKey } = useContext();
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  switch (cursorKey) {
    case 'open-in-new': {
      return (
        <Sight
          animate={{
            scale: 1.4,
            mixBlendMode: 'luminosity',
          }}
        >
          <OpenInNew />
        </Sight>
      );
    }
    case 'gallery': {
      return (
        <Sight
          animate={{ scale: 2, mixBlendMode: 'luminosity' }}
        >
          <Gallery />
        </Sight>
      );
    }
    case 'big': {
      return <Sight animate={{ opacity: 0.4, scale: 2 }} />;
    }
    case 'none': {
      return <Sight animate={{ opacity: 0 }} />;
    }
    default:
      return <Sight animate={{ scale: 0.2 }} />;
  }
};
