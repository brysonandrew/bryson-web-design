import { PreflightContext } from 'unocss';
import { TTheme } from '@uno/theme';

export const resolveScrollbar = ({
  theme,
}: PreflightContext<TTheme>) => `
::-webkit-scrollbar {
  background-color: ${theme.colors['white-7']};
  width: 6px;
}

html.dark ::-webkit-scrollbar {
  background-color: ${theme.colors['black-2']};
}

::-webkit-scrollbar-thumb {
  background-color: ${theme.colors['gray']};
  border: 1px solid ${theme.colors['gray-1']};
}

html.dark ::-webkit-scrollbar-thumb {
  background-color: ${theme.colors['highlight']};
  border: 1px solid ${theme.colors['accent']};
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${theme.colors['gray-3']};
}

html.dark ::-webkit-scrollbar-thumb:hover {
  background-color: ${theme.colors['white-01']};
}
`;
