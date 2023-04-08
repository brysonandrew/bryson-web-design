import { Menu } from "./menu";
import { Shop } from "./shop";
import { Sound } from "./sound";

export const Right = () => (
  <div className="absolute top-0 right-0 p-2 py-0 flex items-center">
    <Shop />
    <div className="p-2" />
    <Sound />
    <div className="p-1" />
    <Menu />
  </div>
);
