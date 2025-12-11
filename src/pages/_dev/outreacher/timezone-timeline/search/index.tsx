import { OUTREACH_COUNTRIES } from '@pages/_dev/outreacher/timezone-timeline/constants';
import { TimezoneTimelineSearchResults } from '@pages/_dev/outreacher/timezone-timeline/search/results';
import { fetchNearbyTowns } from '@pages/_dev/outreacher/timezone-timeline/search/utils';
import {
  TSearchTown,
  TRegion,
} from '@pages/_dev/outreacher/timezone-timeline/types';
import {
  isOfficeHour,
  pickRandomSubset,
} from '@pages/_dev/outreacher/timezone-timeline/utils';
import { useState } from 'react';

export const TimezoneTimelineSearch = () => {
  const [results, setResults] = useState<TSearchTown[]>([]);
  const [statusMessage, setStatusMessage] = useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const now = new Date();

  // Determine which regions have at least one office-hour city right now
  const regionsWithOfficeHours = new Set<TRegion>();

  for (const entry of OUTREACH_COUNTRIES) {
    if (isOfficeHour(now, entry.timeZone)) {
      regionsWithOfficeHours.add(entry.region);
    }
  }

  // For checkboxes / labels that should be highlighted
  const isActiveRegion = (region: TRegion) =>
    regionsWithOfficeHours.has(region);

  const regionLabelClass = (region: TRegion) =>
    isActiveRegion(region)
      ? 'text-primary-05 font-semibold'
      : 'text-white-07';

  const checkboxClass = (isActive: boolean) =>
    [
      'h-4 w-4 rounded-md border border-white-02 bg-black-4/60 backdrop-blur-sm appearance-none transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.05)]',
      'checked:bg-primary-04 checked:border-primary-08 checked:shadow-[0_0_12px_rgba(56,189,248,0.7)]',
      isActive
        ? 'bg-primary-03/30 border-primary-04 shadow-[0_0_12px_rgba(56,189,248,0.55)]'
        : '',
    ].join(' ');

  const handleSelectTown = (town: TSearchTown) => {
    // Callback with full town object
    // You can later wire this into your Outreacher flow
    console.log('Selected town for outreach:', town);
  };

  const handleGenerate = async () => {
    const populationSlider = document.getElementById(
      'population-slider',
    ) as HTMLInputElement | null;
    const resultsSlider = document.getElementById(
      'results-slider',
    ) as HTMLInputElement | null;

    const regionNA = document.getElementById(
      'region-na',
    ) as HTMLInputElement | null;
    const regionEU = document.getElementById(
      'region-eu',
    ) as HTMLInputElement | null;
    const regionAU = document.getElementById(
      'region-au',
    ) as HTMLInputElement | null;

    const populationLevel = populationSlider
      ? Number(populationSlider.value)
      : 2;
    const totalResults = resultsSlider
      ? Number(resultsSlider.value)
      : 10;

    const includeNA = regionNA ? regionNA.checked : true;
    const includeEU = regionEU ? regionEU.checked : true;
    const includeAU = regionAU ? regionAU.checked : true;

    const allowedRegions: TRegion[] = [];
    if (includeNA) allowedRegions.push('NA');
    if (includeEU) allowedRegions.push('EU');
    if (includeAU) allowedRegions.push('AU');

    if (allowedRegions.length === 0) {
      setResults([]);
      setStatusMessage(
        'Select at least one region (NA / EU / AU).',
      );
      return;
    }

    setIsLoading(true);
    setStatusMessage(
      'Searching nearby towns via Google Maps…',
    );
    setResults([]);

    try {
      const nowSearch = new Date();

      const officeCities = OUTREACH_COUNTRIES.filter(
        (entry) =>
          allowedRegions.includes(entry.region) &&
          isOfficeHour(nowSearch, entry.timeZone),
      );

      if (officeCities.length === 0) {
        setResults([]);
        setStatusMessage(
          'No office-hours cities in the selected regions right now.',
        );
        return;
      }

      const maxPerCity = Math.max(
        1,
        Math.ceil(totalResults / officeCities.length),
      );

      const allResults: TSearchTown[] = [];

      for (const city of officeCities) {
        const towns = await fetchNearbyTowns(
          city,
          populationLevel,
          maxPerCity,
        );
        allResults.push(...towns);
      }

      const uniqueMap = new Map<string, TSearchTown>();
      for (const t of allResults) {
        const key = `${t.name}-${t.baseCity}`;
        if (!uniqueMap.has(key)) uniqueMap.set(key, t);
      }

      let unique = Array.from(uniqueMap.values());

      if (unique.length === 0) {
        setResults([]);
        setStatusMessage(
          'No nearby towns found. Try a larger population range or different regions.',
        );
        return;
      }

      if (unique.length > totalResults) {
        unique = pickRandomSubset(unique, totalResults);
      }

      setResults(unique);
      setStatusMessage(null);
    } catch {
      setResults([]);
      setStatusMessage(
        'Error while searching towns. Try again in a moment.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-3 border-t border-black-6 mt-1 flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-white-08 text-xs font-semibold">
            Nearby towns (current office hours)
          </span>
          <span className="text-white-06 text-[0.7rem]">
            Choose regions, town size, and results.
          </span>
        </div>
      </div>

      {/* Region toggles */}
      <div className="flex flex-wrap gap-4 text-[0.7rem] text-white-07">
        <div className="flex items-center gap-3">
          {/* NA */}
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              id="region-na"
              type="checkbox"
              defaultChecked={isActiveRegion('NA')}
              className={checkboxClass(
                isActiveRegion('NA'),
              )}
            />
            <span className={regionLabelClass('NA')}>
              NA
            </span>
          </label>

          {/* EU */}
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              id="region-eu"
              type="checkbox"
              defaultChecked={isActiveRegion('EU')}
              className={checkboxClass(
                isActiveRegion('EU'),
              )}
            />
            <span className={regionLabelClass('EU')}>
              EU
            </span>
          </label>

          {/* AU */}
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              id="region-au"
              type="checkbox"
              defaultChecked={isActiveRegion('AU')}
              className={checkboxClass(
                isActiveRegion('AU'),
              )}
            />
            <span className={regionLabelClass('AU')}>
              AU
            </span>
          </label>
        </div>
      </div>

      {/* Sliders */}
      <div className="text-[0.7rem] text-white-07">
        <div className="flex flex-col items-stretch gap-1">
          <label
            htmlFor="population-slider"
            className="flex items-center gap-1 "
          >
            Approx. population
            <span className="text-white-05">
              (size of town)
            </span>
          </label>
          <input
            id="population-slider"
            type="range"
            min={1}
            max={3}
            defaultValue={2}
            className="w-full accent-primary"
          />
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <label
            htmlFor="results-slider"
            className="flex items-center gap-1"
          >
            Number of results
          </label>
          <input
            id="results-slider"
            type="range"
            min={3}
            max={24}
            defaultValue={10}
            className="w-full accent-primary"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleGenerate}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-08 text-black text-xs font-semibold transition-all shadow-[0_0_18px_rgba(56,189,248,0.55)] hover:shadow-[0_0_26px_rgba(56,189,248,0.8)] disabled:opacity-60 disabled:shadow-none"
        disabled={isLoading}
      >
        {isLoading
          ? 'Searching…'
          : 'Generate via Google Maps'}
      </button>

      <TimezoneTimelineSearchResults
        towns={results}
        isLoading={isLoading}
        statusMessage={statusMessage}
        onSelectTown={handleSelectTown}
      />
    </div>
  );
};
