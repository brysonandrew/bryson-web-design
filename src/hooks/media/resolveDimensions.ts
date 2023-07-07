export const resolveDimensions = (element: HTMLDivElement | HTMLImageElement | null) => element
  ? {
    width: (element as HTMLImageElement).naturalWidth ?? element.clientWidth,
    height: (element as HTMLImageElement).naturalHeight ?? element.clientHeight,
  }
  : null;
