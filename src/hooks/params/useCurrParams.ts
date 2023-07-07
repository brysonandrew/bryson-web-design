import { useSearchParams } from "react-router-dom";
import { NAME_KEY, SOURCE_KEY } from "../../pages/projects/config";

export const useCurrParams = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get(NAME_KEY);
  const source = searchParams.get(SOURCE_KEY);

  return { name, source };
};
