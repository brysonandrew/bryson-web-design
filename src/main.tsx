import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { MOTION_CONFIG } from '@app/animation';
import { Boundary } from '@brysonandrew/boundary';
import { ROUTES } from '@app/routes';

import { init as initServiceWorker } from '@app/service-worker/init';
initServiceWorker();

import 'virtual:uno.css';

const router = createBrowserRouter(ROUTES);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <MotionConfig {...MOTION_CONFIG}>
        <Boundary>
          <Suspense fallback={null}>
            <RouterProvider router={router} />
          </Suspense>
        </Boundary>
      </MotionConfig>
    </StrictMode>,
  );
}
