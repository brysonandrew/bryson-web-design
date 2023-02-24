import styled from "@emotion/styled";
import { Sobel as SobelFilter } from "@components/effects/sobel";
const Root = styled.div``;

export const Sobel = () => {
  return (
    <Root className="relative w-screen h-screen bg-purple-dark">
      <div className="inline-flex fixed top-0 left-0 py-1 px-2 z-0 bg-black-05">
        <h2 className="text-center">Sobel</h2>
      </div>
      <svg
        // version="2.1"
        // baseProfile="full"
        // xmlns="http://www.w3.org/2000/svg"
        // xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <SobelFilter
          external={(filterId) => (
            <image
              filter={`url(#${filterId})`}
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              //xlinkHref="/mugshot2.png"
              xlinkHref="/synthwave.jpg"
            />
          )}
        />
      </svg>
    </Root>
  );
};
