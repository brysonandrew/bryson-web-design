import { useAnalytics } from '@hooks/analytics/useAnalytics';
import { useHtmlTitle } from '@hooks/dom/useHtmlTitle';
import { useContext as useDarkModeContext } from '@context/dark-mode';
import { Helmet } from 'react-helmet-async';

export const Head = () => {
  const { isDarkMode } = useDarkModeContext();
  const prefix = isDarkMode ? '' : '/light';
  const title = useHtmlTitle();
  useAnalytics(title);

  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={`${prefix}/apple-touch-icon.png`}
      ></link>
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={`${prefix}/favicon-32x32.png`}
      ></link>
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={`${prefix}/favicon-16x16.png`}
      ></link>
      <link
        rel='manifest'
        href={`${prefix}/site.webmanifest`}
      ></link>
      <link
        rel='mask-icon'
        href={`${prefix}/safari-pinned-tab.svg`}
        color={isDarkMode ? '#00aba9' : '#5bbad5'}
      ></link>
      <meta
        name='msapplication-TileColor'
        content='#00aba9'
      ></meta>
      <meta name='theme-color' content='#ffffff'></meta>
    </Helmet>
  );
};
