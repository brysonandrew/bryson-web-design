import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Boundary } from '@components/boundary';
import { MOTION_CONFIG } from '@constants/animation';
import { HelmetProvider } from 'react-helmet-async';
import { init as initServiceWorker } from '@app/service-worker/init';
import { ROUTES } from '@app/routes';

initServiceWorker();

import 'virtual:uno.css';
import '@css/globals.css';

const router = createBrowserRouter(ROUTES);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <MotionConfig {...MOTION_CONFIG}>
          <Boundary>
            <Suspense fallback={null}>
              <RouterProvider
                router={router}
                fallbackElement={<div>fallback</div>}
              />
            </Suspense>
          </Boundary>
        </MotionConfig>
      </HelmetProvider>
    </StrictMode>,
  );
}
