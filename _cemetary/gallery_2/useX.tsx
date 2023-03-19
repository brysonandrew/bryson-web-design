import {
  useSearchParams,
} from "react-router-dom";
import {  WIDTH } from "./sections/constants";
import {
  IMG_KEY,
  SELECTED_KEY,
  TMedia,
} from "@pages/showcase/config";

export const useX = (items: TMedia[]) => {
  const [searchParams] = useSearchParams();
  const selected = searchParams.get(SELECTED_KEY);
  const img = searchParams.get(IMG_KEY);

  const activeIndex = Math.max(
    items.findIndex(
      ({ key }) => `${selected}-${img}` === key,
    ),
    0,
  );

  const x = (-activeIndex * WIDTH) / items.length;
  return x;
};
