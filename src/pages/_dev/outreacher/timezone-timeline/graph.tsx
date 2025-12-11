import { TOffsetRow } from "@pages/_dev/outreacher/timezone-timeline/types";

type TTimelineProps = {
  rows: TOffsetRow[];
  viewerOffset: number;
  utcHour: number;
  utcMinutes: number;
  maxCountries: number;
};

export const TimezoneTimelineGraph = ({
  rows,
  viewerOffset,
  utcHour,
  utcMinutes,
  maxCountries,
}: TTimelineProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      {rows.map((row) => {
        const isViewerOffset = row.offsetHours === viewerOffset;

        const localHour = (utcHour + row.offsetHours + 24) % 24;
        const localTime = `${localHour.toString().padStart(2, "0")}:${utcMinutes
          .toString()
          .padStart(2, "0")}`;

        const widthPercent =
          row.countryCount === 0
            ? 10
            : 20 + (row.countryCount / maxCountries) * 60;

        const barColor = isViewerOffset
          ? "bg-primary-04"
          : row.countryCount > 0
          ? "bg-primary-02"
          : "bg-black-6";

        return (
          <div
            key={row.offsetLabel}
            className="flex flex-col gap-1 text-[0.7rem] rounded-lg px-2 py-1"
          >
            {/* Time + UTC + bar */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-32 flex items-center gap-1">
                <span className="font-mono text-white-07">{localTime}</span>
                <span
                  className={`font-semibold ${
                    isViewerOffset ? "text-primary" : "text-white-08"
                  }`}
                >
                  {row.offsetLabel}
                </span>
              </div>

              <div className="flex-1">
                <div className="h-1 bg-black-5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${barColor}`}
                    style={{ width: `${widthPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Cities below line */}
            {row.sampleCities.length > 0 && (
              <div className="ml-32 flex flex-wrap gap-1">
                {row.sampleCities.map((city) => (
                  <span
                    key={city}
                    className="px-2 py-0.5 rounded-md bg-black-3 border border-black-7 text-[0.65rem] text-white-06"
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