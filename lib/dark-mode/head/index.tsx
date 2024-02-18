import { useDarkMode } from '@brysonandrew/dark-mode';
import * as MonoHead from '@brysonandrew/head';
import { useApp } from '@brysonandrew/app';

type TProps<K extends string> = Pick<
  MonoHead.THeadProps<K>,
  'titlesResolver' | 'pageValues'
>;
export const Head = <K extends string>({
  ...props
}: TProps<K>) => {
  const { COLOR } = useApp();
  const { isDarkMode } = useDarkMode();
  const prefix = isDarkMode ? '' : '/light';
  const base = isDarkMode ? COLOR.dark : COLOR.light;

  return (
    <MonoHead.Head<K>
      prefix={prefix}
      base={base}
      {...props}
    />
  );
};

export { MonoHead };
