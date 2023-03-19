import { useSearchParams } from "react-router-dom";
import { SELECTED_KEY } from "./config";

export const useSelectedItem = () => {
  const [searchParams] = useSearchParams();
  const selectedPath = searchParams.get(SELECTED_KEY);
  return selectedPath;
};
