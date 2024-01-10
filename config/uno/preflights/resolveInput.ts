import { TTheme } from '@uno/theme';
import { PreflightContext } from 'unocss';

export const resolveInput = ({
  theme,
}: PreflightContext<TTheme>) => `
input:-webkit-autofill {
  -webkit-text-fill-color: ${theme.colors['black-1']} !important;
  text-fill-color: ${theme.colors['black-1']} !important;
}

html.dark input:-webkit-autofill {
  -webkit-text-fill-color: ${theme.colors['accent']} !important;
  text-fill-color: ${theme.colors['accent']} !important;
}`;
