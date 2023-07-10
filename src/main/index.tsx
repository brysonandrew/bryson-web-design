import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { Source } from './Source';
import { Provider } from '@state/Provider';
import { Boundary } from '@components/boundary';
import { MOTION_CONFIG } from '@constants/animation';
import 'virtual:uno.css';
import '@css/reset.css';
import '@css/globals.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Provider>
        <MotionConfig {...MOTION_CONFIG}>
          <Boundary>
            <Router>
              <Source />
            </Router>
          </Boundary>
        </MotionConfig>
      </Provider>
    </StrictMode>,
  );
}

if (navigator.serviceWorker) {
  try {
    const register = await navigator.serviceWorker.register(
      './sw.js',
      { scope: '/' },
    );
    // const subscription =
    //   await register.pushManager.subscribe();
  } catch (error) {
    console.log(
      'ServiceWorker registration failed:',
      error,
    );
  }

  // .then((registration) => {
  //   console.log(
  //     'ServiceWorker registration successful with scope:',
  //     registration.scope,
  //   );
  // })
  // .catch((error) => {
  // });
}
