import { TimezoneTimelineCurrent } from '@pages/_dev/outreacher/timezone-timeline/current';
import { TimezoneTimelineGraph } from '@pages/_dev/outreacher/timezone-timeline/graph';
import { TimezoneTimelineHeader } from '@pages/_dev/outreacher/timezone-timeline/header';
import { TimezoneTimelineSearch } from '@pages/_dev/outreacher/timezone-timeline/search';
import {
  buildOffsetRows,
  formatTimeInZone,
  getOffsetHours,
  getOffsetLabel,
  getViewerTimeZone,
} from '@pages/_dev/outreacher/timezone-timeline/utils';

export const TimezoneTimeline = () => {
  const now = new Date();
  const viewerTimeZone = getViewerTimeZone();
  const viewerOffset = getOffsetHours(viewerTimeZone);
  const viewerOffsetLabel = getOffsetLabel(viewerOffset);
  const viewerTime = formatTimeInZone(now, viewerTimeZone);

  const utcHour = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();

  const rows = buildOffsetRows(now);
  const maxCountries =
    rows.reduce(
      (max, row) =>
        row.countryCount > max ? row.countryCount : max,
      0,
    ) || 1;

  return (
    <section className="w-full rounded-2xl border border-white-02 bg-dark-07 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl p-4 flex flex-col gap-4">
      <div className="flex items-start gap-2 w-full">
        <div className='grow flex flex-col items-stretch gap-2'>
          <TimezoneTimelineHeader />
          <TimezoneTimelineGraph
            rows={rows}
            viewerOffset={viewerOffset}
            utcHour={utcHour}
            utcMinutes={utcMinutes}
            maxCountries={maxCountries}
          />
        </div>
        <div className='flex flex-col gap-2 max-w-[200px]'>
          <TimezoneTimelineCurrent
            viewerTimeZone={viewerTimeZone}
            viewerTime={viewerTime}
            viewerOffsetLabel={viewerOffsetLabel}
          />
          <TimezoneTimelineSearch />
        </div>
      </div>
    </section>
  );
};
