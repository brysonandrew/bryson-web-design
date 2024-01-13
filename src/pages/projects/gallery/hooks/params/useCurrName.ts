import { NAME_KEY } from "@pages/projects/config/constants/keys";
import { useSearchParams } from "react-router-dom";

export const useCurrName = () => {
  const [searchParams] = useSearchParams();
  const path = searchParams.get(NAME_KEY);
  return path;
};
