import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { Gallery } from './gallery';
import { OpenInNew } from './open-in-new';
import { Box } from './Box';
import { IconWithText } from './IconWithText';
import { HOVER_KEY_DELIMITER } from '@utils/keys';
import { GLOBAL_KEY } from '@hooks/cursor/config';

export const Switch = () => {
  const { hoverKey } = useContext();

  const [cursorKey, key1, key2] = hoverKey
    ?.split(HOVER_KEY_DELIMITER)
    .map((v) => (v === GLOBAL_KEY ? null : v)) ?? [null];

  const lastKey = key2 ?? key1;

  switch (cursorKey) {
    case 'open-in-new': {
      return (
        <Sight>
          <Box delay={0.2}>
            <OpenInNew>{lastKey ?? 'Open'}</OpenInNew>
          </Box> 
        </Sight>
      );
    }
    case 'gallery':
    case 'project': {
      return (
        <Sight>
          <Box delay={0.2}>
            <Gallery />
          </Box>
        </Sight>
      ); 
    }
    case 'gallery-background':
    case 'sound':
    case 'dark-mode': {
      return (
        <Sight>
          <Box delay={0.2}>
            <IconWithText>
              {lastKey ?? 'Toggle'}
            </IconWithText>
          </Box>
        </Sight>
      );
    }
    case 'big': {
      return (
        <Sight
          style={{ opacity: 0.2 }}
          animate={{ opacity: 0.1, scale: 12 }}
        />
      );
    }
    case 'bigger': {
      return (
        <Sight animate={{ opacity: 0.1, scale: 18 }} />
      );
    }
    case 'none': {
      return <Sight animate={{ opacity: 0, scale: 0 }} />;
    }
    default:
      return <Sight animate={{ opacity: 1, scale: 1 }} />;
  }
};
