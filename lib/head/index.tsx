import { useHtmlTitle } from '@brysonandrew/head/useHtmlTitle';
import { Helmet } from 'react-helmet-async';
import {
  defaultTitlesResolver,
  TTitlesResolver,
} from './config';

export type THeadProps<
  K extends string,
  V extends string,
> = {
  titleLookup: Record<K, V>;
  titlesResolver?: TTitlesResolver;
  prefix?: string;
  description?: string;
  base: string;
  highlight: string;
};
export const Head = <K extends string, V extends string>({
  description = '',
  titleLookup,
  titlesResolver = defaultTitlesResolver,
  prefix = '',
  base,
  highlight,
}: THeadProps<K, V>) => {
  const titles = useHtmlTitle<K, V>(
    description,
    titleLookup,
  );

  return (
    <Helmet>
      <title>{titlesResolver(titles)}</title>
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

export * from './config';
export * from './useHtmlTitle';
