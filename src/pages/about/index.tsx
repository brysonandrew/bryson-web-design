<<<<<<< Updated upstream
import { Tech } from "./tech";
import { Intro } from "./Intro";
import { Clients } from "./clients";
import { Mugshot } from "./mugshot";
import { Reviews } from "./reviews";
import { Ending } from "./ending";
import { Space } from "@components/spaces/Space";
import { Space2 } from "@components/spaces/Space2";
import { Space4 } from "@components/spaces/Space4";
import { Space16 } from "@components/spaces/Space16";

export const About = () => (
  <>
    <Intro />
    <Mugshot />
    <Space2 />
    <Tech />
    <Space4 />
    <Clients />
    <Space2 />
    <Reviews />
    <Space4 />
    <Ending />
    <Space16 />
=======
import { Tech } from "./Tech";
import { Intro } from "./Intro";
import { Clients } from "./clients";
import { Mugshot } from "./mugshot";
import { HEADER_OFFSET_Y } from "./constants";
import { Reviews } from "./reviews";

export const About = () => (
  <>
    <div
      className="sticky"
      style={{ bottom: 0, top: HEADER_OFFSET_Y }}
    >
      <div
        className="absolute right-0"
        style={{ top: HEADER_OFFSET_Y / 6 }}
      >
        <Mugshot />
      </div>
    </div>
    <div
      className="relative"
    >
      <Intro />
      <div className="py-1.5" />
      <Tech />
      <div className="py-3" />
      <Clients />
      <div className="py-3" />

      <Reviews/>
      <div className="py-18" />

      <div className="py-18" />
      <div className="py-18" />
      <div className="py-18" />
      <div className="py-18" />
      <div className="py-18" />
      <div className="py-18" />
      <div className="py-18" />
      <div className="py-18" />
    </div>
>>>>>>> Stashed changes
  </>
);
