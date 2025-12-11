import type { FC, FormEvent } from 'react';
import { useCallback, useState, useEffect, useRef } from 'react';
import { GOOGLE_MAPS_API_KEY } from '@pages/_dev/outreacher/timezone-timeline/constants';
import { useOutreacher } from './context';

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

type TGenerateButtonProps = {
  handleGenerate: () => void;
  isLoading: boolean;
  disabled?: boolean;
};

type TSearchResults = {
  businesses: TBusiness[];
  isLoading: boolean;
  statusMessage: string | null;
};

export const BusinessSearchPanel: FC = () => {
  const {
    businessIndustry,
    setBusinessIndustry,
    businessLocation,
    setBusinessLocation,
    businessFinderLocation,
    setUrl,
    handleBusinessSearch,
    businessSearchResults,
    businessError,
    businessLastQuerySummary,
  } = useOutreacher();

  const [industry, setIndustry] = useState(businessIndustry);
  const [location, setLocation] = useState(businessLocation);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const autocompleteElementRef = useRef<google.maps.places.PlaceAutocompleteElement | null>(null);
  const placeSelectHandlerRef = useRef<((event: { place: google.maps.places.Place }) => void) | null>(null);

  // Sync local state with context
  useEffect(() => {
    setIndustry(businessIndustry);
  }, [businessIndustry]);

  useEffect(() => {
    setLocation(businessLocation);
  }, [businessLocation]);

  // Update location when businessFinderLocation changes
  useEffect(() => {
    if (businessFinderLocation !== location) {
      setLocation(businessFinderLocation);
    }
  }, [businessFinderLocation, location]);

  // Initialize Google Places Autocomplete using PlaceAutocompleteElement
  useEffect(() => {
    if (!locationInputRef.current || !GOOGLE_MAPS_API_KEY) {
      return;
    }

    // Check if Google Maps is loaded
    if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
      // Load Google Maps script if not already loaded
      const existingScript = document.querySelector(
        'script[src^="https://maps.googleapis.com/maps/api/js"]',
      );

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          initializeAutocomplete();
        };
        document.head.appendChild(script);
      } else {
        // Script exists, wait for it to load or initialize immediately
        if (google.maps && google.maps.places) {
          initializeAutocomplete();
        } else {
          existingScript.addEventListener('load', initializeAutocomplete);
        }
      }
    } else {
      initializeAutocomplete();
    }

    async function initializeAutocomplete() {
      if (!locationInputRef.current || !google.maps?.places) {
        return;
      }

      // Clean up existing autocomplete if any
      if (autocompleteElementRef.current && placeSelectHandlerRef.current) {
        autocompleteElementRef.current.removeEventListener('gmp-placeselect', placeSelectHandlerRef.current);
        autocompleteElementRef.current = null;
        placeSelectHandlerRef.current = null;
      }

      // Wait for PlaceAutocompleteElement to be available
      if (!google.maps.places.PlaceAutocompleteElement) {
        // If not available, wait a bit and try again
        setTimeout(initializeAutocomplete, 100);
        return;
      }

      // Create new PlaceAutocompleteElement
      const autocompleteElement = new google.maps.places.PlaceAutocompleteElement({
        requestedResultTypes: ['(cities)', 'geocode'],
        requestedFields: ['formatted_address', 'name', 'geometry'],
      });

      // Connect to existing input field
      autocompleteElement.input = locationInputRef.current;

      // Handle place selection
      const handlePlaceSelect = (event: { place: google.maps.places.Place }) => {
        const place = event.place;
        if (place) {
          // The Place object structure may vary, try different properties
          const address = place.formattedAddress || place.formatted_address;
          const name = place.name || place.displayName;
          
          if (address) {
            setLocation(address);
          } else if (name) {
            setLocation(name);
          }
        }
      };

      autocompleteElement.addEventListener('gmp-placeselect', handlePlaceSelect);

      // Store references for cleanup
      autocompleteElementRef.current = autocompleteElement;
      placeSelectHandlerRef.current = handlePlaceSelect;
    }

    return () => {
      if (autocompleteElementRef.current && placeSelectHandlerRef.current) {
        autocompleteElementRef.current.removeEventListener('gmp-placeselect', placeSelectHandlerRef.current);
        autocompleteElementRef.current = null;
        placeSelectHandlerRef.current = null;
      }
    };
  }, []);
  // Update context when local state changes
  useEffect(() => {
    setBusinessIndustry(industry);
  }, [industry, setBusinessIndustry]);

  useEffect(() => {
    setBusinessLocation(location);
  }, [location, setBusinessLocation]);

  const handleSubmit = useCallback(
    async (event?: FormEvent) => {
      event?.preventDefault();
      // Pass current form values directly to handleBusinessSearch
      await handleBusinessSearch(industry, location);
    },
    [industry, location, handleBusinessSearch],
  );

  return (
    <section className="w-full rounded-t-2xl border-t border-l border-r border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col gap-4 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white-09">
            Lead Finder
          </h2>
          <p className="mt-1 text-xs text-white-06">
            Discover businesses by industry + location and
            feed them into Outreacher.
          </p>
        </div>

        {businessLastQuerySummary && (
          <div className="flex max-w-xs flex-col items-start md:items-end">
            <span className="text-[10px] uppercase tracking-[0.08em] text-white-06">
              Last search
            </span>
            <span className="mt-0.5 text-[11px] text-white-08 text-left md:text-right">
              {businessLastQuerySummary}
            </span>
          </div>
        )}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)] md:items-start">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="industry-input"
              className="text-xs font-medium text-white-06"
            >
              Industry
            </label>
            <input
              id="industry-input"
              className="h-9 rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-white-06 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-06"
              placeholder="e.g. bakery, tattoo studio, SaaS agency"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="location-input"
              className="text-xs font-medium text-white-06"
            >
              Location
            </label>
            <input
              ref={locationInputRef}
              id="location-input"
              className="h-9 rounded-xl border border-white-02 bg-black-2 px-3.5 py-2.5 text-sm text-white-9 placeholder:text-white-06 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-06"
              placeholder="e.g. Stockholm, Sweden"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {/* <p className="mt-0.5 text-[10px] text-white-06">
              Free text; backend uses Google Places for matching.
            </p> */}
          </div>
        </div>
      </form>

      {/* Error */}
      {businessError && (
        <div className="rounded-xl border border-red/40 bg-red/10 px-3.5 py-2.5 text-sm text-white">
          {businessError}
        </div>
      )}
    </section>
  );
};
