import { useSearchParams } from "react-router-dom";
import { NAME_KEY } from "./config";

export const useCurrName = () => {
  const [searchParams] = useSearchParams();
  const path = searchParams.get(NAME_KEY);
  return path;
};
