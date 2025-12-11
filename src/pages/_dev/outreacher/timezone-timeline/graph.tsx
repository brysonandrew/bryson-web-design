import { TOffsetRow } from '@pages/_dev/outreacher/timezone-timeline/types';
import { cx } from 'class-variance-authority';

type TTimelineProps = {
  rows: TOffsetRow[];
  viewerOffset: number;
  utcHour: number;
  utcMinutes: number;
  maxCountries: number;
};

// Simple map from UTC offset → human timezone name(s)
const OFFSET_TIMEZONE_NAMES: Record<string, string> = {
  '0': 'UTC',
  '1': 'CET / CEST',
  '2': 'EET / EEST',
  '-5': 'EST / EDT',
  '-4': 'AST / ADT',
  '-8': 'PST / PDT',
  '8': 'AWST',
  '10': 'AEST / AEDT',
  '12': 'NZST / NZDT',
};

export const TimezoneTimelineGraph = ({
  rows,
  viewerOffset,
  utcHour,
  utcMinutes,
}: TTimelineProps) => {
  return (
    <div className="flex flex-col gap-1">
      {rows.map((row, index) => {
        const isViewerOffset =
          row.offsetHours === viewerOffset;
        const isIdealNow = row.hasOfficeNow;

        const localHour =
          (utcHour + row.offsetHours + 24) % 24;
        const localTime = `${localHour.toString().padStart(2, '0')}:${utcMinutes
          .toString()
          .padStart(2, '0')}`;

        const timezoneName =
          OFFSET_TIMEZONE_NAMES[String(row.offsetHours)] ??
          '';

        // Highlight left-side text if ideal
        const timeClass = isIdealNow
          ? 'text-primary-03'
          : 'text-white-07';

        const offsetClass = isIdealNow
          ? 'text-primary'
          : isViewerOffset
            ? 'text-primary'
            : 'text-white-08';

        const tzNameClass = isIdealNow
          ? 'text-primary-04'
          : 'text-white-05';

        // Zebra background
        const zebraBg =
          index % 2 === 0
            ? 'bg-black-1/40'
            : 'bg-black-2/40';

        return (
          <div
            key={row.offsetLabel}
            className={`flex items-center gap-2 text-[0.65rem] rounded-lg px-2 py-0.5 ${zebraBg}`}
          >
            {/* Left: time + UTC + tz name */}
            <div className="flex items-baseline gap-2 min-w-0">
              <span className={`font-mono ${timeClass}`}>
                {localTime}
              </span>

              <span
                className={`font-semibold ${offsetClass}`}
              >
                {row.offsetLabel}
              </span>

              {timezoneName && (
                <span className={tzNameClass}>
                  {timezoneName}
                </span>
              )}
            </div>

            {/* Cluster (cities) */}
            {row.sampleCities.length > 0 && (
              <div
                className={cx(
                  `flex flex-wrap gap-1 ml-auto`,
                )}
              >
                {row.sampleCities.map((city) => (
                  <span
                    key={city}
                    className={cx(
                      'border border-black-7',
                      isIdealNow
                        ? // Highlighted cluster: white text
                          'px-1.5 py-0.5 rounded-md bg-primary-01/40 text-white text-[0.65rem]'
                        : // Normal cluster
                          'px-1.5 py-0.5 rounded-md bg-black-3 text-white-06 text-[0.65rem]',
                    )}
                  >
                    {city}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
