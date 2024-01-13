import { PROJECT_KEY } from "@pages/projects/config/constants/keys";
import { useSearchParams } from "react-router-dom";

export const useCurrProject = () => {
  const [searchParams] = useSearchParams();
  const path = searchParams.get(PROJECT_KEY);
  return path;
};
