import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { Gallery } from './gallery';
import { resolveCursorKeyFromHoverKey } from './config';
import { TMixblendModeKey } from '@t/css';
import { OpenInNew } from './open-in-new';
import { Box } from './Box';
import { LEFT_TOP_MD, LeftTop } from '../position/LeftTop';
import { IconWithText } from './IconWithText';
import { RightCenter } from '@components/position/RightCenter';
import { RIGHT_TOP_MD } from '@components/position/RightTop';

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
            ...RIGHT_TOP_MD,
            mixBlendMode: iconMixBlend,
          }}
        >
          {secondaryKey && (
            <RightCenter>
              <Box delay={0.2}>
                <OpenInNew>{secondaryKey}</OpenInNew>
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
            mixBlendMode: iconMixBlend,
          }}
        >
          {secondaryKey && (
            <RightCenter> 
              <Box delay={0.2}>
                <Gallery />
              </Box>
            </RightCenter>
          )}
        </Sight>
      );
    }
    case 'dark-mode': {
      return (
        <Sight
          animate={{
            ...LEFT_TOP_MD,
          }}
        >
          <LeftTop>
            <Box delay={0.2}>
              <IconWithText>Toggle dark mode</IconWithText>
            </Box>
          </LeftTop>
        </Sight>
      );
    }
    case 'sound': {
      return (
        <Sight
          animate={{
            ...LEFT_TOP_MD,
          }}
        >
          <LeftTop>
            <Box delay={0.2}>
              <IconWithText>Toggle sound</IconWithText>
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
