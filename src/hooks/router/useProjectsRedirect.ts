import { PROJECT_KEY } from "@pages/projects/config";
import { useApp } from '@context/app';
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export const useProjectsRedirect = () => {
  const { isInit } = useApp();
  const [searchParams] = useSearchParams();
  const selectedKey = searchParams.get(PROJECT_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedKey && isInit) {
      navigate(`/projects?${searchParams}`, {
        replace: true,
      });
    }
  }, []);
};