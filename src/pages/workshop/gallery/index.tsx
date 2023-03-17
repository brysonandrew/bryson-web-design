import styled from "@emotion/styled";
import { resolveMedia } from "@pages/showcase/config";
import { Gallery as _Gallery } from "@pages/showcase/full/gallery";

const Root = styled.div``;

export const Gallery = () => (
  <Root className="relative w-screen h-screen">
    <_Gallery
      mediaRecord={{
        alua: [...Array(11)].map((_, i) =>
          resolveMedia(`alua/${i}.jpg`),
        ),
      }}
      selectedPath="alua"
    />
  </Root>
);
