import { useContext } from '@state/Context';
import { Helmet } from 'react-helmet-async';

export const Head = () => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const prefix = isDarkMode ? '' : '/light';

  return (
    <Helmet>
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
        color={isDarkMode ? '#00aba9' : '#5bbad5'}
      />
      <meta
        name='msapplication-TileColor'
        content='#00aba9'
      />
      <meta name='theme-color' content='#ffffff' />
    </Helmet>
  );
};
