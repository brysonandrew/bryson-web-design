import { resolveMedia } from "@pages/showcase/config";
import { Gallery as _Gallery } from "@pages/showcase/full/gallery";
const NAME = "stock-portfolio";

export const Gallery = () => (
  <_Gallery
    mediaRecord={{
      [NAME]: [...Array(5)].map((_, i) =>
        resolveMedia(`${NAME}/${i}.png`),
      ),
    }}
    selectedPath={NAME}
    base="gallery"
  />
);
