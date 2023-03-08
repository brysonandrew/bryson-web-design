import { Tech } from "./Tech";
import { Intro } from "./Intro";
import { Clients } from "./clients";
import { Mugshot } from "./mugshot";
import { HEADER_OFFSET_Y } from "./constants";
import { Reviews } from "./reviews";
import { Ending } from "./ending";
import { Craft } from "./craft";

export const About = () => (
  <>
    <div
      className="sticky"
      style={{ bottom: 0, top: HEADER_OFFSET_Y }}
    >
      <div
        className="absolute right-0"
        style={{ top: HEADER_OFFSET_Y / 4 }}
      >
        <Mugshot />
      </div>
    </div>
    <div className="relative">
      <Intro />
      <div className="py-1.5" />
      <Tech />
      <div className="py-3" />
      <Clients />
      <div className="py-3" />
      <Reviews />
      <div className="py-6" />
      <Ending />
      <div className="py-18" />
    </div>
  </>
);
