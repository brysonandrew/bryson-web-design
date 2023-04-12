import { useEffect } from "react";

export const useStylesAlbumCover = () => {
  useEffect(() => {
    import("./fonts-album-cover.css");
    import("./globals-album-cover.css");
  }, []);
};
