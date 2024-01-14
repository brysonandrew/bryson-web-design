import type { TConfig, TReturn, TConfigInit, TConfigLoop } from "./config";

export type TSpectogramMetadata = {
  width: number;
  height: number;
  heightSegment: number;
  xSegment: number;
};

export const useSpectogram2 = ({ analyzer }: TConfig): TReturn => {
  const init = ({
    canvas,
    canvasContext,
    bufferLength,
  }: TConfigInit): TSpectogramMetadata => {
    const width = (canvas.width = window.innerHeight);
    const height = (canvas.height = window.innerWidth);

    const xSegment = width - 1;
    const heightSegment = height / bufferLength;

    canvasContext.fillStyle = "hsl(280, 100%, 10%)";
    canvasContext.fillRect(0, 0, width, height);

    return {
      heightSegment,
      xSegment,
      width,
      height,
    };
  };

  const loop = ({
    canvas,
    method,
    canvasContext,
    values,
    bufferLength,
    metadata,
  }: TConfigLoop) => {
    const { width } = metadata as TSpectogramMetadata;

    analyzer[method](values);

    const slice = canvasContext.getImageData(0, metadata.height, width, 1);
    for (let i = 0; i < bufferLength; i++) {
      slice.data[4 * i + 0] = values[i]; // R
      slice.data[4 * i + 1] = values[i]; // G
      slice.data[4 * i + 2] = values[i]; // B
      slice.data[4 * i + 3] = 255; // A
    }
    canvasContext.putImageData(slice, 0, metadata.xSegment);
    metadata.xSegment += 1;
    metadata.xSegment %= canvas.height;
  };
  return { init, loop };
};
