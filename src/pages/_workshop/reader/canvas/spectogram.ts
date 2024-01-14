import type { TConfig, TReturn, TConfigInit, TConfigLoop } from "./config";

export type TSpectogramMetadata = {
  width: number;
  height: number;
  heightSegment: number;
  xSegment: number;
};

export const useSpectogram = ({ analyzer }: TConfig): TReturn => {
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
    method,
    canvasContext,
    values,
    bufferLength,
    metadata,
  }: TConfigLoop) => {
    const { width, height, xSegment, heightSegment } = metadata as TSpectogramMetadata;

    const imgData = canvasContext.getImageData(1, 0, width - 1, height);
    canvasContext.fillRect(0, 0, width, height);
    canvasContext.putImageData(imgData, 0, 0);

    analyzer[method](values);

    for (let i = 0; i < bufferLength; i++) {
      const rat = values[i] / 255;
      const hue = Math.round(rat * 120 + (280 % 360));
      const sat = "100%";
      const lit = 10 + 70 * rat + "%";
      canvasContext.beginPath();
      canvasContext.strokeStyle = `hsl(${hue}, ${sat}, ${lit})`;
      canvasContext.moveTo(xSegment, height - i * heightSegment);
      canvasContext.lineTo(xSegment, height - (i * heightSegment + heightSegment));
      canvasContext.stroke();
    }
  };
  return { init, loop };
};
