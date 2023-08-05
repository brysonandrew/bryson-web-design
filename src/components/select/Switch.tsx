import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { Gallery } from './gallery';
import { resolveCursorKeyFromHoverKey } from './config';
import { TMixblendModeKey } from '@t/css';
import { OpenInNew } from './open-in-new';
import { RightCenter } from './RightCenter';
import { Box } from './Box';
import { RIGHT_TOP_MD } from './RightTop';
import { LEFT_TOP_MD, LeftTop } from './LeftTop';
import { IconWithText } from './IconWithText';

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
              <Box>
                <OpenInNew>{secondaryKey}</OpenInNew>
              </Box>
            </RightCenter>
          )}
        </Sight>
      );
    }
    case 'gallery': {
      return (
        <Sight
          animate={{
            ...RIGHT_TOP_MD,
            mixBlendMode: iconMixBlend,
          }}
        >
          <RightCenter>
            <Box>
              <Gallery />
            </Box>
          </RightCenter>
        </Sight>
      );
    }
    case 'project': {
      return (
        <Sight
          animate={{
            ...RIGHT_TOP_MD,
          }}
        >
          {secondaryKey && (
            <RightCenter>
              <Box>
                <Gallery />
              </Box>
              {/* <Bottom classValue='w-screen-8xl'>
                <Space />
                <Project
                  {...PROJECT_ITEMS_RECORD[secondaryKey]}
                />
              </Bottom> */}
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
            <Box>
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
            <Box>
              <IconWithText>Toggle sound</IconWithText>
            </Box>
          </LeftTop>
        </Sight>
      );
    }
    case 'big': {
      return (
        <Sight animate={{ opacity: 0.1, scale: 12 }} />
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
      return <Sight animate={{ scale: 1 }} />;
  }
};
