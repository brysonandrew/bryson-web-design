const MAX_WIDTH = 800;

export const resolveGalleryWidth = (
  viewportWidth: number,
) => Math.min(MAX_WIDTH, viewportWidth * 0.9);
