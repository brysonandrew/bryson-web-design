import { TTheme } from '@uno/theme';
import { PreflightContext } from 'unocss';

export const resolveInput = ({
  theme,
}: PreflightContext<TTheme>) => `
input:-webkit-autofill {
  -webkit-text-fill-color: ${theme.colors['black-1']} !important;
  text-fill-color: ${theme.colors['black-1']} !important;
  filter: none;
  box-shadow: 0 0 0 100px ${theme.colors['white-7']} inset;
}

html.dark input:-webkit-autofill {
  -webkit-text-fill-color: ${theme.colors['accent']} !important;
  text-fill-color: ${theme.colors['accent']} !important;
  filter: none;
  box-shadow: 0 0 0 100px ${theme.colors['black-1']} inset;
}
`;
