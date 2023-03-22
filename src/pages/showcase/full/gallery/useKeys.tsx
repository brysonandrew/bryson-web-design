import { useKey } from "@hooks/useKey";
import { IMG_KEY } from "@pages/showcase/config";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

type TConfig = {
  count: number;
};
export const useKeys = ({ count }: TConfig) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currImg = searchParams.get(IMG_KEY);
  const current = { currImg, count };
  const ref = useRef(current);
  ref.current = current;

  useKey({
    handlers: {
      onKeyDown: (event) => {
        const { currImg, count } = ref.current;

        if (currImg === null) return;
        if (event.key === "ArrowRight") {
          const next = +currImg + 1;
          const n = next % +count;
          searchParams.set(IMG_KEY, `${n}`);
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
