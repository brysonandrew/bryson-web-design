import type { FC, FormEvent } from 'react';
import { useCallback, useState } from 'react';

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

export type TBusinessSearchPanelProps = {
  defaultIndustry?: string;
  defaultLocation?: string;
  onResults?: (businesses: TBusiness[]) => void;
  onUrl?(selected: string): void;
};

export const BusinessSearchPanel: FC<TBusinessSearchPanelProps> = ({
  defaultIndustry = 'web developer',
  defaultLocation = 'Stockholm, Sweden',
  onResults,
  onUrl,
}) => {
  const [industry, setIndustry] = useState(defaultIndustry);
  const [location, setLocation] = useState(defaultLocation);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [businesses, setBusinesses] = useState<TBusiness[]>([]);
  const [lastQuerySummary, setLastQuerySummary] =
    useState<string | null>(null);

  const handleSubmit = useCallback(
    async (event?: FormEvent) => {
      event?.preventDefault();
      setError(null);

      const trimmedIndustry = industry.trim();
      const trimmedLocation = location.trim();

      if (!trimmedIndustry || !trimmedLocation) {
        setError('Please enter both an industry and a location.');
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch(
          'http://localhost:4000/api/businesses/search',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              businessType: trimmedIndustry,
              location: trimmedLocation,
              limit: 30,
            }),
          },
        );

        if (!response.ok) {
          const text = await response.text();
          throw new Error(
            `Request failed with status ${response.status}: ${text}`,
          );
        }

        const data = await response.json();
        const results: TBusiness[] = data.businesses ?? [];

        setBusinesses(results);
        setLastQuerySummary(
          `${trimmedIndustry} in ${trimmedLocation} (${results.length} found)`,
        );

        onResults?.(results);
      } catch (err: any) {
        console.error('Business search failed:', err);
        setError(
          err?.message ||
            'Something went wrong while searching for businesses.',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [industry, location, onResults],
  );

  return (
    <section className="w-full rounded-2xl border border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col gap-3 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-primary">
            Business Finder
          </h2>
          <p className="mt-1 text-xs text-gray-6">
            Discover businesses by industry + location and feed
            them into Outreacher.
          </p>
        </div>

        {lastQuerySummary && (
          <div className="flex max-w-xs flex-col items-start md:items-end">
            <span className="text-[10px] uppercase tracking-[0.08em] text-gray-6">
              Last search
            </span>
            <span className="mt-0.5 text-[11px] text-plus-08 text-left md:text-right">
              {lastQuerySummary}
            </span>
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-1">
        <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)_auto] md:items-start">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="industry-input"
              className="text-xs font-medium text-gray-6"
            >
              Industry
            </label>
            <input
              id="industry-input"
              className="h-9 rounded-lg border border-white-02 bg-black-3 px-2.5 text-xs text-white placeholder:text-gray-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-plus-06"
              placeholder="e.g. bakery, tattoo studio, SaaS agency"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="location-input"
              className="text-xs font-medium text-gray-6"
            >
              Location
            </label>
            <input
              id="location-input"
              className="h-9 rounded-lg border border-white-02 bg-black-3 px-2.5 text-xs text-white placeholder:text-gray-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-plus-06"
              placeholder="e.g. Stockholm, Sweden"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <p className="mt-0.5 text-[10px] text-gray-6">
              Free text; backend uses Google Places for matching.
            </p>
          </div>
        </div>

        <div className="flex items-end mt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-xs font-medium text-black shadow-sm transition hover:bg-primary-08 active:bg-primary-06 disabled:cursor-default disabled:opacity-60"
          >
            {isLoading ? 'Searching…' : 'Find businesses'}
          </button>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div className="mt-1 rounded-lg border border-red/40 bg-red/10 px-2.5 py-2 text-[11px] text-red">
          {error}
        </div>
      )}

      {/* Results */}
      <div className="mt-2">
        {businesses.length === 0 && !isLoading && !error && (
          <p className="text-[11px] text-gray-6">
            No results.
          </p>
        )}

        {businesses.length > 0 && (
          <ul className="mt-1 flex flex-col gap-2 h-[400px] overflow-auto">
            {businesses.map((biz) => (
              <li
                key={biz.id}
                className="flex justify-between gap-3 rounded-lg bg-primary-01 text-[11px] font-medium text-primary hover:bg-primary-02 border border-primary-04 px-3 py-2"
              >
                {/* Left */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-white">
                      {biz.name}
                    </span>

                    {biz.website && (
                      <a
                        href={biz.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-medium text-plus hover:underline"
                      >
                        Website
                      </a>
                    )}

                    {!biz.website && biz.googleMapsUrl && (
                      <a
                        href={biz.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-plus hover:underline"
                      >
                        Maps
                      </a>
                    )}
                  </div>

                  <p className="text-[11px] text-gray-6">
                    {biz.address}
                  </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 text-[11px] text-gray-6">
                  {onUrl && biz.website && (
                    <button
                      onClick={() => onUrl(biz.website!)}
                      className="text-plus hover:underline"
                    >
                      Add
                    </button>
                  )}

                  {biz.googleMapsUrl && (
                    <a
                      href={biz.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Open
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};