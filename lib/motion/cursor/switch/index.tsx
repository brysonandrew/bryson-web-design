import { IconWithText } from './IconWithText';
import { Sight } from './Sight';
import { Box } from './Box';
import {
  BIGGER_CURSOR_KEY,
  BIG_CURSOR_KEY,
  CUSTOM_CURSOR_KEY,
  GLOBAL_KEY,
  NONE_CURSOR_KEY,
} from '@brysonandrew/motion-cursor/config/constants';
import { useScroll } from '@brysonandrew/motion-scroll';
import { useCursor } from '@brysonandrew/motion-cursor';
import { HOVER_KEY_DELIMITER } from '../config/constants';

export const Switch = () => {
  const { hoverKey, children } = useCursor();
  const { isScrolling } = useScroll();

  if (isScrolling) return <Sight />;

  const [cursorKey, textKey, iconKey] = hoverKey
    ?.split(HOVER_KEY_DELIMITER)
    .map((v: string) => (v === GLOBAL_KEY ? null : v)) ?? [
    null,
  ];

  switch (cursorKey) {
    case CUSTOM_CURSOR_KEY: {
      return (
        <Sight>
          <Box>
            <IconWithText iconStr={iconKey}>
              {children ?? textKey}
            </IconWithText>
          </Box>
        </Sight>
      );
    }

    case BIG_CURSOR_KEY: {
      return (
        <Sight
          animate={{
            opacity: 0.1,
            scale: 12,
          }}
        />
      );
    }

    case BIGGER_CURSOR_KEY: {
      return (
        <Sight animate={{ opacity: 0.1, scale: 18 }} />
      );
    }

    case NONE_CURSOR_KEY: {
      return <Sight animate={{ opacity: 0, scale: 0 }} />;
    }

    default:
      return <Sight />;
  }
};
