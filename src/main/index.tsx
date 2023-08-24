import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { Source } from './Source';
import { Provider as ScrollProvider } from '@context/scroll/Provider';
import { Provider as DarkModeProvider } from '@context/dark-mode/Provider';
import { Provider as SoundProvider } from '@context/sound/Provider';
import { Provider as AppProvider } from '@context/app/Provider';
import { Provider as CursorProvider } from '@context/cursor/Provider';
import { Provider as GalleryProvider } from '@context/domains/gallery/Provider';
import { Provider as ContactProvider } from '@context/domains/contact/Provider';
import { Provider as ViewportProvider } from '@context/viewport/Provider';

import { Boundary } from '@components/boundary';
import { MOTION_CONFIG } from '@constants/animation';
import { init as initServiceWorker } from './service-worker/init';
import { HelmetProvider } from 'react-helmet-async';

initServiceWorker();
import 'virtual:uno.css';
import '@css/reset.css';
import '@css/globals.css';
import { Head } from './Head';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <ScrollProvider>
        <DarkModeProvider>
          <SoundProvider>
            <AppProvider>
              <ViewportProvider>
                <CursorProvider>
                  <GalleryProvider>
                    <ContactProvider>
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
                    </ContactProvider>
                  </GalleryProvider>
                </CursorProvider>
              </ViewportProvider>
            </AppProvider>
          </SoundProvider>
        </DarkModeProvider>
      </ScrollProvider>
    </StrictMode>,
  );
}
