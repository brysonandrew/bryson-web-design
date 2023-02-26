import { resolveUrlId } from "@utils/resolveUrlId";
import { Pool as PoolFilter } from "@components/effects/pool";

const ID = "ID";

export const Pool = () => {
  return (
    <>
      <svg width="0%" height="0%">
        <PoolFilter id={ID} />
      </svg>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          xlinkHref="/synthwave.jpg"
          // xlinkHref="/mugshot2.png"
          //fill={resolveUrlId(G_ID)}
          filter={resolveUrlId(ID)}
        />
      </svg>
    </>
  );
};
