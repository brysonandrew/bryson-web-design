import { useEffect } from 'react';
import { resolveRandomMediaRecord } from './resolveRandomMediaRecord';
import { useContext } from '@state/Context';

export const useSmallImages = () => {
  const { dispatch } = useContext();

  useEffect(() => {
    const init = async () => {
      const value = await resolveRandomMediaRecord();

      dispatch({ type: 'images', value });
    };
    init();
  }, []);
};
