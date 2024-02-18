import { useEffect, useState } from 'react';

export const useInit = () => {
  const initState = useState(false);
  const [_, setInit] = initState;
  const onInit = () => setInit(true);

  useEffect(() => {
    onInit();
  }, []);

  return initState;
};
