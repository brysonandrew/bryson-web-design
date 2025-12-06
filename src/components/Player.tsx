import type { FC } from "react";

export const Player: FC = () => {
  return (
    <div>
      <video
          controls
          className="w-[280px] bg-white rounded-2xl"
        >
          <source
            src="/videos/intro.mp4"
            type="video/mp4"
          />
        </video>
    </div>
  );
};