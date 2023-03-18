import styled from "@emotion/styled";
import { resolveMedia } from "@pages/showcase/config";
import { Gallery as _Gallery } from "@pages/showcase/full/gallery";
const NAME = "stock-portfolio";

const Root = styled.div``;

export const Gallery = () => (
  <Root className="relative w-screen h-screen">
    <_Gallery 
      mediaRecord={{
        [NAME]: [...Array(5)].map((_, i) =>
          resolveMedia(`${NAME}/${i}.png`),
        ),
      }}
      selectedPath={NAME}
    />
  </Root>
);
