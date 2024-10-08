import {
  ITEMS,
  UPWORK_BASE,
} from '@pages/_dev/work/config/constants';
import { WorkExperience } from '@pages/_dev/work/experience';
import { WorkItemCustom } from '@pages/_dev/work/item/custom';
import { GlobalCss } from '@shell/global/Css';
import { withProviders } from '@shell/providers/withProviders';
import { WorkItem } from './item';

export const Work = withProviders(() => {
  return (
    <div className="bg-main w-full min-h-screen">
      <GlobalCss />
      <div className="column">
        <div className="py-6" />
        <h4 className="text-4xl text-white-8">
          Upwork links
        </h4>
        <div className="py-2" />
        <h3 className="text-xl text-gray">
          {UPWORK_BASE}?
        </h3>
        <div className="py-2" />
        <div>
          <WorkExperience>
            {(workExperienceState) => (
              <div className='column-stretch'>
                <div className="p-2 rounded-xl border border-gray">
                  <h2 className="text-3xl">Custom</h2>
                  <WorkItemCustom
                    {...workExperienceState}
                  />
                </div>
                <div className="p-2 rounded-xl border border-gray">
                  <h2 className="text-3xl">Predefined</h2>
                  <ul className="column-stretch gap-4">
                    {ITEMS.map((item, index) => (
                      <WorkItem
                        key={`${index}`}
                        {...item}
                        {...workExperienceState}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </WorkExperience>
        </div>
      </div>
      <div className="py-24" />
    </div>
  );
});
