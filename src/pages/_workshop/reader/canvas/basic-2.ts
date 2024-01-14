import type { TConfig, TReturn, TConfigLoop } from "./config";

export const useBasic2 = ({ analyzer }: TConfig): TReturn => {
  const init = console.log;
  const loop = ({ method, values, bufferLength, canvas, canvasContext }: TConfigLoop) => {
    const width = canvas.width;
    const height = canvas.height;
    analyzer[method](values);
    //canvasContext.clearRect(0, 0, width, height);
    //canvasContext.globalCompositeOperation = 'source-over';

    canvasContext.globalAlpha = 0.1;
    canvasContext.fillStyle = "#000";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.globalAlpha = 1;

    //canvasContext.globalCompositeOperation = 'screen';

    if (values) {
      const w = width / bufferLength;
      const halfHeight = height / 2;

      canvasContext.beginPath();
      canvasContext.moveTo(-20, height);

      for (let i = 0; i < bufferLength; i += 2) {
        const x1 = i * w;
        const y1 = height - height * (values[i] / 255);
        const x2 = (i + 1) * w;
        const y2 = height - height * (values[i + 1] / 255);

        canvasContext.quadraticCurveTo(x1, y1, x2, y2);
      }
      canvasContext.lineTo(width + 20, height);
      canvasContext.closePath();

      canvasContext.fillStyle = "#FD12EA";
      canvasContext.strokeStyle = "#FD12EA";
      canvasContext.lineWidth = 20;

      canvasContext.globalAlpha = 0.2;
      canvasContext.fill();
      canvasContext.globalAlpha = 0.5;
      canvasContext.stroke();

      /* ---------------------------------- */

      canvasContext.beginPath();
      canvasContext.moveTo(width + 20, height);

      for (let i = 0; i < bufferLength; i += 2) {
        const x1 = width - i * w;
        const y1 = height - height * (values[i] / 255);
        const x2 = width - (i + 1) * w;
        const y2 = height - height * (values[i + 1] / 255);

        canvasContext.quadraticCurveTo(x1, y1, x2, y2);
      }
      canvasContext.lineTo(-20, height);
      canvasContext.closePath();

      canvasContext.fillStyle = "#FD9413";
      canvasContext.strokeStyle = "#FD9413";
      canvasContext.lineWidth = 20;

      canvasContext.globalAlpha = 0.2;
      canvasContext.fill();
      canvasContext.globalAlpha = 0.5;
      canvasContext.stroke();
    }
  };
  return { init, loop };
};
