import { SELECTED_KEY } from "@pages/showcase/config";
import { useMediaFromKey } from "@pages/showcase/gallery/hooks/useMediaFromKey";
import { useContext } from "@state/Context";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export const useShowcaseRedirect = () => {
  const { isInit } = useContext();
  const handleLoadMedia = useMediaFromKey();
  const [searchParams] = useSearchParams();
  const selectedKey = searchParams.get(SELECTED_KEY);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedKey && isInit) {
      handleLoadMedia(selectedKey);
      navigate(`/showcase?${searchParams}`, {
        replace: true,
      });
    }
  }, []);
};