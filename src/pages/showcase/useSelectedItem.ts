import { useSearchParams } from "react-router-dom";
import { SELECTED_PATH } from "./config";

export const useSelectedItem = () => {
  const [searchParams] = useSearchParams();
  const selectedPath = searchParams.get(SELECTED_PATH);
  return selectedPath;
};
