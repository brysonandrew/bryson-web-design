import type { FC, FormEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { GOOGLE_MAPS_API_KEY as IMPORTED_KEY } from '@pages/_dev/outreacher/timezone-timeline/constants';
import { useOutreacher } from './context';

declare global {
  interface Window {
    __gmapsPlacesPromise?: Promise<void>;
    __initPlaces?: () => void;
    google?: any;
    __locTypingTimer?: number;
  }
}

export type TBusiness = {
  id: string;
  name: string;
  address: string;
  website?: string;
  googleMapsUrl?: string;
  lat?: number;
  lng?: number;
  rawTypes?: string[];
};

const loadGooglePlacesOnce = (apiKey: string): Promise<void> => {
  if (window.google?.maps?.places) return Promise.resolve();

  if (!window.__gmapsPlacesPromise) {
    window.__gmapsPlacesPromise = new Promise<void>((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>('script[data-gmaps="places"]');

      window.__initPlaces = () => {
        if (window.google?.maps?.places) resolve();
        else reject(new Error('Google script loaded but places is missing'));
      };

      const attachHandlers = (script: HTMLScriptElement) => {
        script.addEventListener('error', () => {
          reject(new Error('Failed to load Google Maps script (network/CSP?)'));
        });
      };

      if (existing) {
        if (window.google?.maps?.places) {
          resolve();
          return;
        }
        attachHandlers(existing);
        return;
      }

      const script = document.createElement('script');
      script.dataset.gmaps = 'places';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=__initPlaces`;
      script.async = true;
      script.defer = true;

      attachHandlers(script);
      document.head.appendChild(script);
    });
  }

  return window.__gmapsPlacesPromise;
};

export const BusinessSearchPanel: FC = () => {
  const {
    businessIndustry,
    setBusinessIndustry,
    businessLocation,
    setBusinessLocation,
    businessFinderLocation,
    handleBusinessSearch,
    businessError,
    businessLastQuerySummary,
  } = useOutreacher();

  const [industry, setIndustry] = useState(businessIndustry);
  const [location, setLocation] = useState(businessLocation);

  const locationInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const lastIndustryRef = useRef(businessIndustry);
  const lastLocationRef = useRef(businessLocation);

  const isUserTypingRef = useRef(false);

  /**
   * Key fix:
   * When clicking a suggestion, Google mutates the input value and fires an input event
   * BEFORE `place_changed` runs. With a controlled input, your React `onChange`
   * can overwrite the chosen value with the previous value.
   *
   * So we set a "selecting" lock on mousedown/touchstart inside .pac-container,
   * then ignore onChange until place_changed commits.
   */
  const isSelectingFromAutocompleteRef = useRef(false);

  const didInitAutocompleteRef = useRef(false);

  // ---- CSS fix: ensure dropdown is above overlays ----
  useEffect(() => {
    const styleId = 'gmaps-pac-zindex-fix';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .pac-container { z-index: 999999 !important; }
      body { position: relative; }
    `;
    document.head.appendChild(style);

    return () => style.remove();
  }, []);

  // ---- Detect "selecting from dropdown" early (before place_changed) ----
  useEffect(() => {
    const onPointerDown = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest?.('.pac-container')) {
        isSelectingFromAutocompleteRef.current = true;
        isUserTypingRef.current = false;
      }
    };

    const onPointerUp = () => {
      // If place_changed never fires (rare), don't get stuck
      window.setTimeout(() => {
        isSelectingFromAutocompleteRef.current = false;
      }, 400);
    };

    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('mouseup', onPointerUp, true);
    document.addEventListener('touchend', onPointerUp, true);

    return () => {
      document.removeEventListener('mousedown', onPointerDown, true);
      document.removeEventListener('touchstart', onPointerDown, true);
      document.removeEventListener('mouseup', onPointerUp, true);
      document.removeEventListener('touchend', onPointerUp, true);
    };
  }, []);

  // ---- Sync local industry state from context (only if context changes externally) ----
  useEffect(() => {
    if (businessIndustry !== lastIndustryRef.current) {
      lastIndustryRef.current = businessIndustry;
      if (businessIndustry !== industry) setIndustry(businessIndustry);
    }
  }, [businessIndustry, industry]);

  // ---- Sync local location state from context (only if not typing/selecting) ----
  useEffect(() => {
    if (isUserTypingRef.current) return;
    if (isSelectingFromAutocompleteRef.current) return;

    if (businessLocation !== lastLocationRef.current) {
      lastLocationRef.current = businessLocation;
      if (businessLocation !== location) setLocation(businessLocation);
    }
  }, [businessLocation, location]);

  useEffect(() => {
    if (isUserTypingRef.current) return;
    if (isSelectingFromAutocompleteRef.current) return;

    if (businessFinderLocation && businessFinderLocation !== lastLocationRef.current) {
      lastLocationRef.current = businessFinderLocation;
      if (businessFinderLocation !== location) setLocation(businessFinderLocation);
    }
  }, [businessFinderLocation, location]);

  // ---- Initialize Google Places Autocomplete (once) ----
  useEffect(() => {
    const input = locationInputRef.current;
    if (!input) return;

    if (didInitAutocompleteRef.current) return;
    didInitAutocompleteRef.current = true;

    const keyFromEnv = (import.meta as any)?.env?.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
    const apiKey = (IMPORTED_KEY || keyFromEnv || '').trim();

    console.log('[Places] imported key present?', Boolean(IMPORTED_KEY));
    console.log('[Places] env key present?', Boolean(keyFromEnv));
    console.log('[Places] using key present?', Boolean(apiKey));

    if (!apiKey) {
      console.warn(
        '[Places] No API key found. If you use Vite, define VITE_GOOGLE_MAPS_API_KEY in .env and restart dev server.',
      );
      return;
    }

    input.setAttribute('autocomplete', 'new-password');
    input.setAttribute('spellcheck', 'false');

    const init = async () => {
      try {
        await loadGooglePlacesOnce(apiKey);

        if (!window.google?.maps?.places) {
          console.error('[Places] places library missing after load');
          return;
        }

        if (autocompleteRef.current) {
          window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
          autocompleteRef.current = null;
        }

        const ac = new window.google.maps.places.Autocomplete(input, {
          types: ['(cities)'],
          fields: ['formatted_address', 'name', 'geometry'],
        });

        ac.addListener('place_changed', () => {
          const place = ac.getPlace();
          const address = place?.formatted_address || place?.name;
          if (!address) return;

          // lock out input onChange overwrites until we've committed
          isSelectingFromAutocompleteRef.current = true;
          isUserTypingRef.current = false;

          lastLocationRef.current = address;

          // Make sure the actual DOM input shows the selected value immediately
          // (helps if React is mid-render)
          if (locationInputRef.current) locationInputRef.current.value = address;

          setLocation(address);
          setBusinessLocation(address);

          // release after things settle
          window.setTimeout(() => {
            isSelectingFromAutocompleteRef.current = false;
          }, 250);
        });

        autocompleteRef.current = ac;

        setTimeout(() => {
          const pac = document.querySelector('.pac-container');
          console.log('[Places] pac-container exists?', Boolean(pac), pac);
        }, 500);
      } catch (err) {
        console.error('[Places] init failed:', err);
      }
    };

    void init();

    return () => {
      if (autocompleteRef.current && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
      if (window.__locTypingTimer) window.clearTimeout(window.__locTypingTimer);
    };
  }, [setBusinessLocation]);

  const handleSubmit = useCallback(
    async (event?: FormEvent) => {
      event?.preventDefault();

      // Commit latest local values right before searching
      setBusinessIndustry(industry);
      setBusinessLocation(location);

      await handleBusinessSearch(industry, location);
    },
    [handleBusinessSearch, industry, location, setBusinessIndustry, setBusinessLocation],
  );

  return (
    <section className="w-full rounded-t-2xl border-t border-l border-r border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col gap-4 p-4 md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white-09">Lead Finder</h2>
          <p className="mt-1 text-xs text-white-06">
            Discover businesses by industry + location and feed them into Outreacher.
          </p>
        </div>

        {businessLastQuerySummary && (
          <div className="flex max-w-xs flex-col items-start md:items-end">
            <span className="text-[10px] uppercase tracking-[0.08em] text-white-06">Last search</span>
            <span className="mt-0.5 text-[11px] text-white-08 text-left md:text-right">
              {businessLastQuerySummary}
            </span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)] md:items-start">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="industry-input" className="text-xs font-medium text-white-06">
              Industry
            </label>
            <input
              id="industry-input"
              className="h-9 rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-white-06 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-06"
              placeholder="e.g. bakery, tattoo studio, SaaS agency"
              value={industry}
              onChange={(e) => {
                const value = e.target.value;
                setIndustry(value);
                setBusinessIndustry(value);
              }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="location-input" className="text-xs font-medium text-white-06">
              Location
            </label>
            <input
              ref={locationInputRef}
              id="location-input"
              className="h-9 rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-white-06 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-06"
              placeholder="e.g. Stockholm, Sweden"
              value={location}
              onChange={(e) => {
                // If a dropdown selection is happening, ignore the transient input events
                if (isSelectingFromAutocompleteRef.current) return;

                const value = e.target.value;

                isUserTypingRef.current = true;
                lastLocationRef.current = value;

                setLocation(value);

                if (window.__locTypingTimer) window.clearTimeout(window.__locTypingTimer);
                window.__locTypingTimer = window.setTimeout(() => {
                  isUserTypingRef.current = false;
                }, 150);
              }}
              onBlur={() => {
                isUserTypingRef.current = false;
                // Commit on blur (unless selection is in-flight)
                if (!isSelectingFromAutocompleteRef.current) setBusinessLocation(location);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (!isSelectingFromAutocompleteRef.current) setBusinessLocation(location);
                }
              }}
            />
          </div>
        </div>
      </form>

      {businessError && (
        <div className="rounded-xl border border-red/40 bg-red/10 px-3.5 py-2.5 text-sm text-white">
          {businessError}
        </div>
      )}
    </section>
  );
};