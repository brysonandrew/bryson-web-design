import { TWebFontsProvider } from '@brysonandrew/uno-presets';

export const resolveFontProviderHref = (
  provider: TWebFontsProvider,
) => {
  switch (provider) {
    case 'google':
      return 'https://fonts.google.com/';
    case 'bunny':
      return 'https://bunny.net/';
    case 'fontshare':
      return 'https://www.fontshare.com/';
    default:
      return undefined;
  }
};
