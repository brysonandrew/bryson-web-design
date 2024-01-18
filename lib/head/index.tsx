import { useHtmlTitle } from 'lib/head/useHtmlTitle';
import { useDarkMode } from 'lib/context/dark-mode/context/useDarkMode';
import { Helmet } from 'react-helmet-async';
import { useApp } from 'lib/context/app/useApp';

type TProps<T extends Record<string, string>> = {
  titleLookup: T;
};
export const Head = <T extends Record<string, string>>({
  titleLookup,
}: TProps<T>) => {
  const { COLOR } = useApp();
  const { isDarkMode } = useDarkMode();
  const prefix = isDarkMode ? '' : '/light';
  const title = useHtmlTitle<T>(titleLookup);
  const base = isDarkMode ? COLOR['black'] : COLOR['white'];
  const highlight = isDarkMode
    ? COLOR['secondary']
    : COLOR['accent'];

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
