import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";
import {
  Shape as _Shape,
  ExtrudeGeometry,
  ShapeGeometry,
} from "three";
import { SVGPathData } from "svg-pathdata";

export const Shape = () => {
  const geometryRef = useRef<ShapeGeometry>(
    new ShapeGeometry(),
  );
  const shapeRef = useRef(new _Shape());
  const meshRef = useRef<Mesh | null>(null);

  const convert = () => {
    const d =
      "M203.2 28.18C137.2 69.46 103.8 127.8 83.44 189c-20.38 61.1-28.39 125.3-44.11 180.3l17.3 5c16.28-57 24.27-120.8 43.87-179.7 19.7-58.8 50.3-112.44 112.3-151.15zm105.6 0l-9.6 15.27c62 38.71 92.6 92.35 112.3 151.15 19.6 58.9 27.6 122.7 43.8 179.7l17.4-5c-15.8-55-23.8-119.2-44.2-180.3-20.3-61.2-53.7-119.54-119.7-160.82zM189 81.28c-19.3 16.09-39.5 43.92-54.9 76.42-14.5 30.6-24.8 65.3-28 98 19.6-13.4 38.3-15.9 54.7-10.4 11.9 4 22.3 11.1 32 19.5-5.7-20.8-11.1-40.8-15.5-58.6-6.1-24.5-10.3-44.4-10.3-58.4v-3.7l2.6-2.7c8.6-8.6 21.9-22.5 38.3-33.6-7-7.7-13.2-16.32-18.9-26.52zm134 0c-5.7 10.19-11.9 18.82-18.9 26.52 16.4 11.1 29.7 25 38.3 33.6l2.6 2.7v3.7c0 14-4.2 33.9-10.3 58.4-4.4 17.8-9.8 37.8-15.5 58.6 9.7-8.4 20.1-15.5 32-19.5 16.4-5.5 35.1-3 54.7 10.4-3.2-32.7-13.5-67.4-28-98-15.4-32.5-35.6-60.33-54.9-76.42zm-67 27.52c-24.7 0-54.1 26.2-70.7 42.6.6 10.8 4.1 28.8 9.4 50.5 6 24 14 52.5 22 81.5 14.7 53.5 29.6 107.8 31.8 143.4h15c2.2-35.6 17.1-89.9 31.8-143.4 8-29 16-57.5 22-81.5 5.3-21.7 8.8-39.7 9.4-50.5-16.6-16.4-46-42.6-70.7-42.6zm0 23c32 0 48 32 48 32l-16 32c-32-16-32-16-64 0l-16-32s16-32 48-32zm-9 96h18v80h-18zm-104.7 32.3c-2.4.1-4.8.3-7.3.9v30.8h18v-30.2c-3.5-.9-7-1.5-10.7-1.5zm227.4 0c-3.7 0-7.2.6-10.7 1.5v30.2h18V261c-2.5-.6-4.9-.8-7.3-.9zM247 444.8v39h18v-39z".toUpperCase();
    const p = new SVGPathData(d);
    p.commands.forEach((c) => {
      if (c.type === SVGPathData.MOVE_TO) {
        if (c.x && c.y) {
          shapeRef.current.moveTo(c.x, c.y);
        }
      }
      if (c.type === SVGPathData.LINE_TO) {
        shapeRef.current.lineTo(c.x, c.y);
      }
      if (c.type === SVGPathData.CURVE_TO) {
        shapeRef.current.bezierCurveTo(
          c.x,
          c.y,
          c.x1,
          c.y1,
          c.x2,
          c.y2,
        );
      }
    });
    geometryRef.current = new ExtrudeGeometry(
      shapeRef.current,
      {
        depth: 8,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 1,
        bevelThickness: 1,
      },
    );
  };

  useEffect(() => {
    convert();
  }, []);

  return (
    <mesh ref={meshRef}>
      {/* <extrudeGeometry
        ref={geometryRef}
        // att={shapeRef.current}
        // args={[1.5, 32]}
        {...{
          depth: 8,
          bevelEnabled: true,
          bevelSegments: 2,
          steps: 2,
          bevelSize: 1,
          bevelThickness: 1,
        }}
      /> */}
      <shapeGeometry
        attach="geometry"
        args={[shapeRef.current]}
        ref={geometryRef}
      />
      <meshPhongMaterial
        attach="material"
        emissive={0xfafafa}
        color={0x212121}
      />
    </mesh>
  );
};
