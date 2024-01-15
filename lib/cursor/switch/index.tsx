import { useCursor } from '@lib/cursor/context';
import { HOVER_KEY_DELIMITER } from '@lib/utils/key';
import { GLOBAL_KEY } from '@lib/cursor/hooks/config';
import { IconWithText } from './IconWithText';
import { Sight } from './Sight';
import { Box } from './Box';
import { CUSTOM_CURSOR_KEY } from './config';

export const Switch = () => {
  const { hoverKey, children } = useCursor();

  const [cursorKey, textKey, iconKey] = hoverKey
    ?.split(HOVER_KEY_DELIMITER)
    .map((v) => (v === GLOBAL_KEY ? null : v)) ?? [null];

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

    case 'big': {
      return (
        <Sight
          animate={{
            opacity: 0.1,
            scale: 12,
          }}
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
      return <Sight />;
  }
};
