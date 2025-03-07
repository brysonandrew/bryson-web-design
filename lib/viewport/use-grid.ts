import { useMemo } from 'react';
import {
  resolveIntRecord,
  TPxRecord,
} from '@brysonandrew/utils-unit';
import { TViewport } from '@brysonandrew/viewport/use-measure';

export const GRID_CLASS_VALUE =
  'sm:grid-cols-2 xl:grid-cols-3';
type TBreakpointKey = string;
const colSets = GRID_CLASS_VALUE.split(' ');
const colBreaks: [TBreakpointKey, number][] = colSets
  .reverse()
  .map((v) => {
    const [bp, cols] = v.split(':');
    const colCount = parseInt(
      cols.replace('grid-cols-', '')
    );
    return [bp, colCount];
  });

export const useGrid = (vp: TViewport, bpr: TPxRecord) => {
  const bpri = resolveIntRecord(bpr);
  const grid = useMemo(() => {
    if (vp.isDimensions) {
      const width = vp.width;

      const resolveColsCount = () => {
        for (const [bp, count] of colBreaks) {
          if (width > bpri[bp]) {
            return count;
          }
        }
        return 1;
      };

      const colsCount = resolveColsCount();

      return {
        size: vp.container?.isDimensions
          ? vp.container.width
          : 0 / colsCount,
        colsCount,
      };
    }

    return { size: 0, colsCount: 0 };
  }, [vp.isDimensions, vp.isResizing]);

  return grid;
};

export type TUseGrid = ReturnType<typeof useGrid>;
