import {
  PROJECT_KEY,
  NAME_KEY,
} from "@pages/projects/config";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

export const useTo = (next?: string | number) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const name = searchParams.get(PROJECT_KEY);

  if (!name || !next) return pathname;

  return `${pathname}?${PROJECT_KEY}=${name}&${NAME_KEY}=${next}`;
};
