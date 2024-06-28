import { useDarkMode } from '@brysonandrew/dark-mode';
import * as MonoHead from '@brysonandrew/head';

type TProps<K extends string> = Pick<
  MonoHead.THeadProps<K>,
  'titlesResolver' | 'pageValues'
>;
export const Head = <K extends string>({
  ...props
}: TProps<K>) => {
  const { isDarkMode } = useDarkMode();
  const prefix = isDarkMode ? '' : '/light';
  // const base = isDarkMode ? COLOR.dark : COLOR.light;

  return (
    <MonoHead.Head<K>
      prefix={prefix}
      // base={base}
      {...props}
    />
  );
};

export { MonoHead };
