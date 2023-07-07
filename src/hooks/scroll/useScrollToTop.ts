
import { useContext } from '@state/Context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const { isInit, scrollX, scrollY, dispatch } = useContext();


  useEffect(() => {
    const setY = () => {
      scrollX.set(0);
      scrollY.set(0);
      window.scrollTo(0, 0);
      dispatch({ type: 'scroll-start', value: false });
    };
    setY();
  }, [isInit, pathname]);
};