import type { TConfig, TReturn, TConfigLoop } from "./config";

export const useBasic1 = ({ analyzer }: TConfig): TReturn => {
  const init = console.log;
  const loop = ({ method, values, bufferLength, canvas, canvasContext }: TConfigLoop) => {
    analyzer[method](values);
    for (let i = 0; i < bufferLength; i++) {
      const x = i * 0.1;
      const y = values[i] * canvas.height * 0.5;
      if (i == 0) {
        canvasContext.moveTo(x, y);
      } else {
        canvasContext.lineTo(x, y);
      }
    }
    canvasContext.stroke();
  };
  return { init, loop };
};
