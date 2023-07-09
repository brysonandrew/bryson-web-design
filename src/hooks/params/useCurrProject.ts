import { useSearchParams } from "react-router-dom";
import { PROJECT_KEY } from "../../pages/projects/config";

export const useCurrProject = () => {
  const [searchParams] = useSearchParams();
  const path = searchParams.get(PROJECT_KEY);
  return path;
};
