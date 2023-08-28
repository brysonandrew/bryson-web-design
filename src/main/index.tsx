import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { Source } from './Source';

import { Boundary } from '@components/boundary';
import { MOTION_CONFIG } from '@constants/animation';
import { HelmetProvider } from 'react-helmet-async';
import { resolveRandomIndicies as _resolveRandomIndicies } from '@hooks/media/resolveRandomIndicies';
import { init as initServiceWorker } from './service-worker/init';

initServiceWorker();
import 'virtual:uno.css';
import '@css/reset.css';
import '@css/globals.css';
import { Head } from './Head';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <MotionConfig {...MOTION_CONFIG}>
          <Boundary>
            <Router>
              <Head />
              <Suspense fallback={null}>
                <Source />
              </Suspense>
            </Router>
          </Boundary>
        </MotionConfig>
      </HelmetProvider>
    </StrictMode>,
  );
}
