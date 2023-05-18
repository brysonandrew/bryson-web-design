import { Background } from "@components/background";
import { Desk } from "@components/icons/Desk";
import { EXPERIENCE_SLOGAN } from "@components/shell/constants";
import { Sub } from "@components/text/Sub";

const ICON_SIZE = {
  width: 120,
  height: 120,
};

export const Title = () => {
  return (
    <>
      <Background />
      <div className="flex items-center justify-center">
        <div className="-mt-4">
          <Desk {...ICON_SIZE} />
        </div>
        <div className="p-2" />
        <div className="flex flex-col items-center">
          <h1 style={{ fontSize: 50, lineHeight: 1 }}>
            Andrew Bryson
          </h1>
          <div className="p-0.5" />
          <Sub
            style={{
              fontSize: 42,
              color: "white",
            }}
          >
            {EXPERIENCE_SLOGAN}
          </Sub>
        </div>
      </div>
    </>
  );
};
