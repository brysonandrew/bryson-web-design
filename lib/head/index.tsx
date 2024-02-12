import { useHtmlTitle } from '@brysonandrew/head';
import { useApp } from '@brysonandrew/app';
import { Helmet } from 'react-helmet-async';
import {
  defaultTitlesResolver,
  TTitlesResolver,
} from '@brysonandrew/head/config';

export type THeadProps<
  K extends string,
  V extends string,
> = {
  titleLookup: Record<K, V>;
  titlesResolver?: TTitlesResolver;
  prefix?: string;
  description?: string;
  base?: string;
  secondary?: string;
};
export const Head = <K extends string, V extends string>({
  description = '',
  titleLookup,
  titlesResolver = defaultTitlesResolver,
  prefix = '',
  ...props
}: THeadProps<K, V>) => {
  const { COLOR } = useApp();
  const titles = useHtmlTitle<K, V>(
    description,
    titleLookup,
  );
  const base = props.base ?? COLOR['accent'];
  const secondary = props.secondary ?? COLOR['secondary'];

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
        color={secondary}
      />
      <meta
        name='msapplication-TileColor'
        content={secondary}
      />
      <meta name='theme-color' content={base} />
    </Helmet>
  );
};

export * from './HeadProvider';
export * from './config';
export * from './useHtmlTitle';





