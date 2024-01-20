import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { MOTION_CONFIG } from '@brysonandrew/animation/config/constants';
import { HelmetProvider } from 'react-helmet-async';
import { Boundary } from '@brysonandrew/base/boundary';
import { ROUTES } from '@app/routes';
// import { init as initServiceWorker } from '@app/service-worker/init';
// initServiceWorker();
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
              <RouterProvider router={router} />
            </Suspense>
          </Boundary>
        </MotionConfig>
      </HelmetProvider>
    </StrictMode>,
  );
}
