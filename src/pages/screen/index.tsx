import { Screen as _Screen } from '@pages/kino/screen';
import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';
import { Variables } from '@css/Variables';

export const Screen = () => {
  return (
    <>
      <Variables />
      <_Screen />
    </>
  );
};
