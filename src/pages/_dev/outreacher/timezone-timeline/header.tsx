import type { FC } from 'react';

export const TimezoneTimelineHeader: FC = () => {
  return (
    <div>
      <h2 className="text-white-09 text-sm font-semibold">
        Timezone Timeline
      </h2>
      <p className="text-white-06 text-xs">
        24 UTC offsets stacked vertically. Line length = how
        many countries.
      </p>
    </div>
  );
};
