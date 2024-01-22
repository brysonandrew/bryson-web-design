import { useMoveSound } from '@brysonandrew/sounds/useMoveSound';
import { useOffSound } from '@brysonandrew/sounds/useOffSound';
import { useKey } from '@brysonandrew/hooks/dom/useKey';
import { NAME_KEY } from '@brysonandrew/gallery/config/constants';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

type TConfig = {
  readyCount: number;
};
export const useKeys = ({ readyCount }: TConfig) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currName = searchParams.get(NAME_KEY);
  const current = { currName, readyCount };
  const ref = useRef(current);
  ref.current = current;
  const handleMoveSound = useMoveSound();
  const handleOffSound = useOffSound();

  useKey({
    handlers: {
      onKeyDown: (event) => {
        const { currName, readyCount } = ref.current;

        if (currName === null) return;
        if (event.key === 'ArrowLeft') {
          handleMoveSound();
          let next = +currName - 1;
          next = next === 0 ? readyCount : next;
          searchParams.set(NAME_KEY, `${next}`);
          navigate(`${pathname}?${searchParams}`);
          return;
        }
        if (event.key === 'ArrowRight') {
          handleMoveSound();
          const n = +currName % readyCount;
          searchParams.set(NAME_KEY, `${n + 1}`);
          navigate(`${pathname}?${searchParams}`);
          return;
        }
        if (event.key === 'Escape') {
          handleOffSound();
          navigate(pathname);
          return;
        }
      },
    },
    isMarker: true,
  });
};
