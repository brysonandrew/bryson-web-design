export const resolveDimensions = (
  element: HTMLDivElement | HTMLImageElement | null,
) => {
  let width = 0;
  let height = 0;
  if (element) {
    width =
      (element as HTMLImageElement).naturalWidth ??
      element.clientWidth;
    height =
      (element as HTMLImageElement).naturalHeight ??
      element.clientHeight;
  }
  if (width > 0 && height > 0) {
    return { width, height };
  }
  return null;
};
