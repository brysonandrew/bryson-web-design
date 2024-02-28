import { useApp } from '@brysonandrew/app';
import { TRoute } from '@brysonandrew/routes';

type TConfig<T extends string = string> = {
  appTitle?: string;
  pageValues: TRoute<T>[];
};
export const useTitleLookup = <T extends string = string>({
  appTitle,
  pageValues,
}: TConfig<T>) => {
  const { APP_TITLE } = useApp();
  const titleLookup = pageValues.reduce(
    (a, { path, title }) => ({
      ...a,
      [path]:
        title === 'Index' ? appTitle ?? APP_TITLE : title,
    }),
    {} as Record<T, string>,
  );
  return titleLookup;
};
