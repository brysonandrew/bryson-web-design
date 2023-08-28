import { TBaseProps } from '@components/gallery/types';
import { resolveX } from '@utils/gallery/resolveX';

type TConfig = Pick<
  TBaseProps,
  'mediaRecords' | 'motionX'
> & {
  currName: string | null;
  width: number;
};
export const useX = ({
  motionX,
  currName,
  mediaRecords,
  width,
}: TConfig) => {
  const activeIndex = mediaRecords.findIndex(
    (mediaRecord) => mediaRecord.name === currName,
  );
  const x =
    activeIndex < 0
      ? motionX.get()
      : resolveX({
          activeIndex,
          width,
          count: mediaRecords.length,
        });
  return x;
};
