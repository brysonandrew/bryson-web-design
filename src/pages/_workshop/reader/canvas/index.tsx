import { useEffect, useRef } from "react";
import type { FC } from "react";
import styled from "@emotion/styled";
import { useSpectogram2 } from "./spectogram-2";
import { useReader } from "@pages/_workshop/reader/context/ReaderProvider";

const Canvas = styled.canvas`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #212121;
`;

export const VisualizerCanvas: FC = () => {
  const { context, master } = useReader();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRequest = useRef<number | null>(null);
  const analyzerRef = useRef(context.createAnalyser());
  const render = useSpectogram2({
    analyzer: analyzerRef.current as AnalyserNode,
    values: null,
    values2: null,
    bufferLength: 2
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas?.getContext("2d");

    if (canvas && canvasContext) {
      master.connect(analyzerRef.current);
      analyzerRef.current.fftSize = 4096; //2048;
      const bufferLength = analyzerRef.current.frequencyBinCount;
      const values = new Uint8Array(bufferLength);

      const initConfig = {
        canvasContext,
        canvas,
        bufferLength,
      };
      const metadata = render.init(initConfig);

      const draw = () => {
        frameRequest.current = requestAnimationFrame(draw);
        if (!canvas || !canvasContext) {
          cancelAnimationFrame(frameRequest.current);
          return null;
        }

        const loopConfig = {
          values,
          canvasContext,
          canvas,
          bufferLength,
          metadata,
        };

        render.loop({ method: "getByteFrequencyData", ...loopConfig });
        canvasContext.closePath();
      };
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
      draw();
    }

    return () => {
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
    };
  }, [canvasRef.current]);

  return <Canvas ref={canvasRef} />;
};
