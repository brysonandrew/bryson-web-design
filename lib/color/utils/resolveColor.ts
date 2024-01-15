import { TColorRecord, TRgbRecord } from '@lib/color/types';

export type TConfig<K extends string> = {
  colorRecord: TColorRecord<K>;
  colorKey: K;
  opacity: number;
};
export const resolveColor = <K extends string>({
  colorRecord,
  colorKey,
  opacity,
}: TConfig<K>) =>
  `rgba(${colorRecord[colorKey]}, ${opacity})`;
