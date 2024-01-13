import { useHtmlTitle } from '@lib/hooks/dom/useHtmlTitle';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { Helmet } from 'react-helmet-async';
import { THEME_COLORS } from '@app/colors/constants';

export const Head = () => {
  const { isDarkMode } = useDarkMode();
  const prefix = isDarkMode ? '' : '/light';
  const title = useHtmlTitle();
  const base = isDarkMode
    ? THEME_COLORS['black']
    : THEME_COLORS['white'];
  const highlight = isDarkMode
    ? THEME_COLORS['dark-highlight']
    : THEME_COLORS['light-highlight'];

  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={`${prefix}/apple-touch-icon.png`}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={`${prefix}/favicon-32x32.png`}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={`${prefix}/favicon-16x16.png`}
      />
      <link
        rel='manifest'
        href={`${prefix}/site.webmanifest`}
      />
      <link
        rel='mask-icon'
        href={`${prefix}/safari-pinned-tab.svg`}
        color={highlight}
      />
      <meta
        name='msapplication-TileColor'
        content={highlight}
      />
      <meta name='theme-color' content={base} />
    </Helmet>
  );
};
