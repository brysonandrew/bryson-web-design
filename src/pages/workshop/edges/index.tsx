import styled from "@emotion/styled";
import {
  Edges as EdgesFilter,
} from "@components/effects/edges";
const Root = styled.div``;

export const Edges = () => {
  return (
    <Root className="relative w-screen h-screen bg-purple-dark">
      <div className="inline-flex fixed top-0 left-0 py-1 px-2 z-0 bg-black-05">
        <h2 className="text-center">Edges</h2>
      </div>
      <svg
        version="2.1"
        baseProfile="full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <EdgesFilter
          external={(id) => (
            <image
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              xlinkHref="/synthwave.jpg"
              //xlinkHref="/mugshot2.png"
              filter={`url(#${id})`}
            />
          )}
        />
      </svg>
    </Root>
  );
};
{
  /* <!--<image filter="url(#blobby)" width="400" height="300" xlink:href="http://www.roborealm.com/help/Sobel_src.jpg" preserveAspectRatio="none" transform="translate(1140 1126)"></image>--> */
}

{
  /* <foreignObject width="100%" height="100%">
          <div
            style={{ filter: `url(#${EDGES_ID})` }}
            className="bg-white"
          >
            <img src="/synthwave.jpg" />
          </div>
        </foreignObject> */
}
