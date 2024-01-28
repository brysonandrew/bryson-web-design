export const resolveAspectRatio = (element: HTMLDivElement | HTMLImageElement) =>
  ((element as HTMLImageElement).naturalWidth ?? element.clientWidth) /
  ((element as HTMLImageElement).naturalHeight ?? element.clientHeight);
