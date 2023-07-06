import { NAME_KEY } from "@pages/showcase/config";
import { useSearchParams } from "react-router-dom";
import { useTo } from "./useTo";

export const usePrev = (max: number) => {
  const [searchParams] = useSearchParams();
  const index = searchParams.get(NAME_KEY);
  const nextIndex = Number(index) - 1;
  const next = useTo(nextIndex < 1 ? max : nextIndex);
  if (!index) return "";
  return next;
};
