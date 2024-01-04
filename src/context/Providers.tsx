import { Provider as ScrollProvider } from '@context/scroll/Provider';
import { Provider as DarkModeProvider } from '@context/dark-mode/Provider';
import { Provider as SoundProvider } from '@context/sound/Provider';
import { Provider as AppProvider } from '@context/app/Provider';
import { Provider as CursorProvider } from '@context/cursor/Provider';
import { Provider as GalleryProvider } from '@context/domains/gallery/Provider';
import { Provider as ServicesProvider } from '@context/domains/services/Provider';
import { Provider as ContactProvider } from '@context/domains/contact/Provider';
import { Provider as ViewportProvider } from '@context/viewport/Provider';
//BuildProvider is in src/pages/index/build/index.tsx

import { TChildren } from '@t/index';
import { FC } from 'react';

type TProps = { children: TChildren };
export const Providers: FC<TProps> = ({ children }) => {
  return (
    <ScrollProvider>
      <DarkModeProvider>
        <SoundProvider>
          <AppProvider>
            <ViewportProvider>
              <CursorProvider>
                <GalleryProvider>
                  <ServicesProvider>
                    <ContactProvider>
                      {children}
                    </ContactProvider>
                  </ServicesProvider>
                </GalleryProvider>
              </CursorProvider>
            </ViewportProvider>
          </AppProvider>
        </SoundProvider>
      </DarkModeProvider>
    </ScrollProvider>
  );
};
