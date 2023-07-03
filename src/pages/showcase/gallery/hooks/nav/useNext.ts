
import { IMG_KEY } from "@pages/showcase/config";
import { useSearchParams } from "react-router-dom";
import { useTo } from "./useTo";

export const useNext = (max: number) => {
  const [searchParams] = useSearchParams();
  const index = searchParams.get(IMG_KEY);
  const next = useTo(((Number(index)) % max) + 1);
  return next;
};
