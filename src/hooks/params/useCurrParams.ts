import { useSearchParams } from "react-router-dom";
import { NAME_KEY, PROJECT_KEY } from "../../pages/projects/config";

export const useCurrParams = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get(NAME_KEY);
  const project = searchParams.get(PROJECT_KEY);

  return { name, project };
};
