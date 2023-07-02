import { useEffect } from 'react';
import { resolveRandom } from './resolveRandom';
import { useContext } from '@state/Context';

export const useSmallImages = () => {
  const { dispatch } = useContext();

  useEffect(() => {
    const init = async () => {
      const randoms = await resolveRandom();
      dispatch({ type: 'images', value: randoms });
    };
    init();
  }, []);
};
