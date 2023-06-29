
import { useContext } from '@state/Context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const { dispatch } = useContext();

  useEffect(() => {
    console.log("SCROLL TOP");
    window.scrollTo(0, 0);
    dispatch({ type: 'scroll', value: false });
  }, [pathname]);
};