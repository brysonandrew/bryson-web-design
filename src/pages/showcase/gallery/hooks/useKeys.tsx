import { useMoveSound } from "@hooks/sounds/useMoveSound";
import { useOffSound } from "@hooks/sounds/useOffSound";
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
  const handleMoveSound = useMoveSound();
  const handleOffSound = useOffSound();

  useKey({
    handlers: {
      onKeyDown: (event) => {
        const { currImg, count } = ref.current;

        if (currImg === null) return;
        if (event.key === "ArrowLeft") {
          handleMoveSound();
          let next = +currImg - 1;
          next = next === 0 ? count : next;
          searchParams.set(IMG_KEY, `${next}`);
          navigate(`${pathname}?${searchParams}`);
          return;
        }
        if (event.key === "ArrowRight") {
          handleMoveSound();
          const n = +currImg % count;
          searchParams.set(IMG_KEY, `${n + 1}`);
          navigate(`${pathname}?${searchParams}`);
          return;
        }
        if (event.key === "Escape") {
          handleOffSound();
          navigate(pathname);
          return;
        }
      },
    },
    isActive: true,
  });
};
