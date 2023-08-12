import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { Gallery } from './gallery';
import { OpenInNew } from './open-in-new';
import { Box } from './Box';
import { LEFT_TOP_MD, LeftTop } from '../position/LeftTop';
import { IconWithText } from './IconWithText';
import { RightCenter } from '@components/position/RightCenter';
import { RIGHT_TOP_MD } from '@components/position/RightTop';
import { HOVER_KEY_DELIMITER } from '@utils/keys';
import { GLOBAL_KEY } from '@hooks/useHoverKey';

export const Switch = () => {
  const { hoverKey } = useContext();

  const [cursorKey, key1, key2] = hoverKey
    ?.split(HOVER_KEY_DELIMITER)
    .map((v) => (v === GLOBAL_KEY ? null : v)) ?? [null];

  const lastKey = key2 ?? key1;

  switch (cursorKey) {
    case 'tag-open-in-new':
    case 'open-in-new': {
      return (
        <Sight
          animate={{
            ...RIGHT_TOP_MD,
          }}
        >
          {lastKey && (
            <RightCenter>
              <Box delay={0.2}>
                <OpenInNew>{lastKey}</OpenInNew>
              </Box>
            </RightCenter>
          )}
        </Sight>
      );
    }
    case 'gallery':
    case 'project': {
      return (
        <Sight
          animate={{
            ...RIGHT_TOP_MD,
          }}
        >
          {key1 && (
            <RightCenter>
              <Box delay={0.2}>
                <Gallery />
              </Box>
            </RightCenter>
          )}
        </Sight>
      );
    }
    case 'gallery-background':
    case 'sound':
    case 'dark-mode': {
      return (
        <Sight
          animate={{
            ...LEFT_TOP_MD,
          }}
        >
          <LeftTop>
            <Box delay={0.2}>
              <IconWithText>
                {lastKey ?? 'Toggle'}
              </IconWithText>
            </Box>
          </LeftTop>
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
