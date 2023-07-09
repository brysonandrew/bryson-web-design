import { SOURCE_KEY } from "@pages/projects/config";
import { useMediaFromKey } from "@hooks/media/useMediaFromKey";
import { useContext } from "@state/Context";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export const useProjectsRedirect = () => {
  const { isInit } = useContext();
  const handleLoadMedia = useMediaFromKey();
  const [searchParams] = useSearchParams();
  const selectedKey = searchParams.get(SOURCE_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedKey && isInit) {
      handleLoadMedia(selectedKey);
      navigate(`/projects?${searchParams}`, {
        replace: true,
      });
    }
  }, []);
};