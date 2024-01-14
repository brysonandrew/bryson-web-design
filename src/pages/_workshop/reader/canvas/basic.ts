import type {
  TConfig,
  TReturn,
  TConfigLoop,
} from './config';

export const useBasic = ({
  analyzer,
}: TConfig): TReturn => {
  const init = console.log;
  const loop = ({
    method,
    values,
    bufferLength,
    canvas,
    canvasContext,
  }: TConfigLoop) => {
    analyzer[method](values);
    canvasContext.fillStyle = 'rgb(200, 200, 200)';
    canvasContext.fillRect(
      0,
      0,
      canvas.width,
      canvas.height,
    );
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'rgb(0, 0, 0)';
    const sliceWidth = (canvas.width * 1.0) / bufferLength;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const v = values[i] / 128.0;
      const y = (v * canvas.height) / 2;
      if (i === 0) {
        canvasContext.moveTo(x, y);
      } else {
        canvasContext.lineTo(x, y);
      }
      x += sliceWidth;
    }
  };
  return { init, loop };
};
