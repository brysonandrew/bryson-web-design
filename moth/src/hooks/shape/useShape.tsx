import { useMemo, useRef } from "react";
import { SVGPathData } from "svg-pathdata";
import { Shape } from "three";
import { resolveName } from "./config";

export const useShape = (path: string) => {
  const statsRef = useRef<{
    record: Partial<Record<string, number>>;
    list: string[];
  }>({ record: {}, list: [] });

  const shape = useMemo(() => {
    const result = new Shape();

    const p = new SVGPathData(path).toAbs();

    p.commands.forEach((c) => {
      // const nameKey = resolveName(c.type);
      // if (nameKey !== null) {
      //   statsRef.current.list.push(nameKey);
      //   statsRef.current.record[nameKey] =
      //     (statsRef.current.record[nameKey] ?? 0) + 1;
      // }

      if (c.type === SVGPathData.MOVE_TO) {
        result.moveTo(c.x, c.y);
        return;
      }

      if (c.type === SVGPathData.LINE_TO) {
        result.lineTo(c.x, c.y);
        return;
      }

      if (c.type === SVGPathData.VERT_LINE_TO) {
        const curr = result.currentPoint;
        result.lineTo(curr.x, c.y);
        return;
      }

      if (c.type === SVGPathData.HORIZ_LINE_TO) {
        const curr = result.currentPoint;
        result.lineTo(c.x, curr.y);
        return;
      }

      if (c.type === SVGPathData.CLOSE_PATH) {
        result.closePath();
        return;
      }

      if (c.type === SVGPathData.CURVE_TO) {
        result.bezierCurveTo(
          c.x1,
          c.y1,
          c.x2,
          c.y2,
          c.x,
          c.y,
        );
        return;
      }
      if (c.type === SVGPathData.SMOOTH_CURVE_TO) {
        result.quadraticCurveTo(c.x2, c.y2, c.x, c.y);
        return;
      }
    });
    return result;
  }, []);
  if (!shape) return null;

  return shape;
};
