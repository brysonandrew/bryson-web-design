import styled from "@emotion/styled";
import { resolveMedia } from "@pages/showcase/config";
import { Gallery as _Gallery } from "@pages/showcase/full/gallery";
const NAME = "baycom";

const Root = styled.div``;

export const Gallery = () => (
  <Root className="relative w-screen h-screen">
    <_Gallery
      mediaRecord={{
        [NAME]: [...Array(6)].map((_, i) =>
          resolveMedia(`${NAME}/${i}.png`),
        ),
      }}
      selectedPath={NAME}
    />
  </Root>
);
