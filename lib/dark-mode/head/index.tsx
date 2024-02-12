import { useDarkMode } from '@brysonandrew/dark-mode';
import * as MonoHead from '@brysonandrew/head';
import { useApp } from '@brysonandrew/app';

type TProps<K extends string, V extends string> = Pick<
  MonoHead.THeadProps<K, V>,
  'titleLookup' | 'titlesResolver' | 'description'
>;
export const Head = <K extends string, V extends string>({
  ...props
}: TProps<K, V>) => {
  const { COLOR } = useApp();
  const { isDarkMode } = useDarkMode();
  const prefix = isDarkMode ? '' : '/light';
  const base = isDarkMode ? COLOR['black'] : COLOR['white'];
  const secondary = isDarkMode
    ? COLOR['primary']
    : COLOR['accent'];

  return (
    <MonoHead.Head<K, V>
      prefix={prefix}
      base={base}
      secondary={secondary}
      {...props}
    />
  );
};

export { MonoHead };
