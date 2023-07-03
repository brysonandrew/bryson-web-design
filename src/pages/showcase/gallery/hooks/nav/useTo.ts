import {
  SELECTED_KEY,
  IMG_KEY,
} from "@pages/showcase/config";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

export const useTo = (next?: string | number) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const name = searchParams.get(SELECTED_KEY);

  if (!name || !next) return pathname;

  return `${pathname}?${SELECTED_KEY}=${name}&${IMG_KEY}=${next}`;
};
