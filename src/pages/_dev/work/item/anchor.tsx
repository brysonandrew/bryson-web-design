import { FC, Fragment } from 'react';
import { resolveGradient } from '@brysonandrew/color-gradient';
import { WorkItemLabel } from '@pages/_dev/work/item/label';
import { useWorkState } from '@pages/_dev/work/context';
import { WorkButton } from '@pages/_dev/work/button';
import { TAnchorProps } from '@brysonandrew/config-types';
import clsx from 'clsx';

type TProps = {
  isHover: boolean;
  params: string;
  anchorProps: TAnchorProps;
};
export const WorkItemAnchor: FC<TProps> = ({
  isHover,
  anchorProps,
  params,
}) => {
  const { commonState } = useWorkState();
  const { isExpert, isIntermediate, hourly, location } =
    commonState;

  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: ['to left','#444', '#111'],
  });

  return (
    <a
      className="relative"
      target="_blank"
      {...anchorProps}
    >
      {isHover && (
        <div
          className="absolute -inset-x-1 top-0 -bottom-2 opacity-40"
          style={{ backgroundImage }}
        />
      )}
      <ul className="relative column-start sm:row justify-start gap-3">
        {(isExpert || isIntermediate) && (
          <WorkItemLabel title="Experience">
            {isIntermediate && <div>Intermediate</div>}
            {isExpert && <div>Expert</div>}
          </WorkItemLabel>
        )}

        {location && (
          <WorkItemLabel title="Location">
            {location}
          </WorkItemLabel>
        )}
        {hourly && (
          <WorkItemLabel
            classValue="row gap-1"
            title="Range"
          >
            from
            <div>${hourly.min}</div>
            {hourly.max && (
              <>
                to
                <div>${hourly.max}</div>
              </>
            )}
          </WorkItemLabel>
        )}
      </ul>
      <div className="relative text-base text-blue truncate">
        {params}
      </div>
      <div
        className={clsx(
          'absolute right-0 top-1/2 -translate-y-1/2',
          isHover ? 'opacity-100' : 'opacity-10'
        )}
      >
        <WorkButton
          title={`Open ${anchorProps.href}`}
          Background={Fragment}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"
            />
            <path
              fill="currentColor"
              d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"
            />
          </svg>
        </WorkButton>
      </div>
    </a>
  );
};
