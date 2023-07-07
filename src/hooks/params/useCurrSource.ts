import { useSearchParams } from "react-router-dom";
import { SOURCE_KEY } from "../../pages/projects/config";

export const useCurrSource = () => {
  const [searchParams] = useSearchParams();
  const path = searchParams.get(SOURCE_KEY);
  return path;
};
