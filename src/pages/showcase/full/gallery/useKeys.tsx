import { useKey } from "@hooks/useKey";
import { IMG_KEY } from "@pages/showcase/config";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

type TConfig = {
  count: number;
};
export const useKeys = ({ count }: TConfig) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useKey({
    handlers: {
      onKeyDown: (event) => {
        const currImg = searchParams.get(IMG_KEY);
        if (currImg === null) return;
        if (event.key === "ArrowRight") {
          const next = +currImg + 1;
          searchParams.set(IMG_KEY, `${next % count}`);
          navigate(`${pathname}?${searchParams}`);
        }
        if (event.key === "ArrowLeft") {
          let next = +currImg - 1;
          next = next === -1 ? count - 1 : next;
          searchParams.set(IMG_KEY, `${next}`);
          navigate(`${pathname}?${searchParams}`);
        }
        if (event.key === "Escape") {
          navigate(pathname);
        }
      },
    },
    isActive: true,
  });
};
