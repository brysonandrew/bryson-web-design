import { WorkButton } from '@pages/_dev/work/button';
import { UPWORK_BASE } from '@pages/_dev/work/config/constants';
import { WorkFilters } from '@pages/_dev/work/filters';
import { WorkItemCustom } from '@pages/_dev/work/item/custom';
import {
  useWorkState,
  WorkStateProvider,
} from '@pages/_dev/work/context';
import { WorkTitle } from '@pages/_dev/work/title';
import { GlobalCss } from '@shell/global/Css';
import { withProviders } from '@shell/providers/withProviders';
import { WorkItem } from './item';
import { WorkItemLabel } from '@pages/_dev/work/item/label';
import './reset.css';
import { Fragment } from 'react/jsx-runtime';

const _Work = withProviders(() => {
  const { remove, reset, add, items, isQ } = useWorkState();
  return (
    <div className="center bg-main w-full min-h-screen">
      <GlobalCss />
      <div className="column-stretch w-full px-5 xxl:w-[900px]">
        <div className="py-6" />
        <div className="row gap-2">
          <h4 className="text-2xl text-gray-8 uppercase">
            Upwork links
          </h4>
          <WorkButton title="Reset list" onClick={reset}>
            ↺
          </WorkButton>
        </div>

        <div className="py-0.25" />
        <h3 className="text-xl text-gray truncate">
          {UPWORK_BASE}?
        </h3>
        <div className="py-4" />
        <WorkFilters>
          {(workCommonState) => (
            <div className="column-stretch gap-4">
              <div className="px-2 pt-0.5 pb-3 rounded-xl border border-gray">
                <div className="row-space">
                  <WorkTitle>Custom</WorkTitle>
                  <div></div>
                </div>
                <WorkItemCustom>
                  {(next) => (
                    <WorkButton
                      title="Add item"
                      disabled={!isQ}
                      onClick={() => {
                        if (!isQ) return;
                        add({
                          ...next,
                          ...workCommonState,
                        });
                      }}
                    >
                      {/* ➕ ⧺ ⧻  */}⨁{/* ＋ */}
                    </WorkButton>
                  )}
                </WorkItemCustom>
              </div>
              <div className="px-2 py-0.5 pb-3 rounded-xl border border-gray">
                <div className="row-space">
                  <WorkTitle>Predefined</WorkTitle>
                  <div></div>
                </div>
                {items.length === 0 ? (
                  <WorkItemLabel title="No entries" />
                ) : (
                  <ul className="column-stretch gap-4">
                    {items.map((item, index) => (
                      <WorkItem key={`${index}`} {...item}>
                        <WorkButton
                          title="Delete item"
                          onClick={() => remove(item.id)}
                        >
                          ⊖{/* 𝕏 */}
                        </WorkButton>
                      </WorkItem>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </WorkFilters>
      </div>
      <div className="py-24" />
    </div>
  );
});

export const Work = () => (
  <WorkStateProvider>
    <_Work />
  </WorkStateProvider>
);
