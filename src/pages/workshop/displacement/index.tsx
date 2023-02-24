import styled from "@emotion/styled";
import {
  Displacement as DisplacementFilter,
  ID,
} from "@components/effects/displacement";
import { Filter as SobelFilter } from "@components/effects/sobel/Filter";
import { Filter as LightingFilter } from "@components/effects/lighting/Filter";
import { Filters as SweepFilters } from "@components/effects/sweep/Filters";
import { Shapes as SweepShapes } from "@components/effects/sweep/Shapes";
import { SWEEP_ARR } from "@components/effects/sweep/config";

const Root = styled.div``;

export const Displacement = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Displacement</h2>
    </div>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <SweepShapes items={SWEEP_ARR} />
      <image
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        xlinkHref="/synthwave.jpg"
        //xlinkHref="/mugshot2.png"
        filter={`url(#${ID})`}
      />
    </svg>
    <svg width="0" height="0">
      <DisplacementFilter>
        {(displacementId) => (
          <SobelFilter
            id={displacementId}
            result="SobelFilterId"
          >
            {(sobelId) => (
              // <LightingFilter id={sobelId} />
              <SweepFilters
                items={SWEEP_ARR}
                id={sobelId}
                result="SweepFiltersId"
              >
                {(sweepsId) => (
                  <feMerge>
                    <feMergeNode in={displacementId} />
                    <feMergeNode in={sweepsId} />
                    {/* <feMergeNode in="SourceGraphic" /> */}
                  </feMerge>
                  // <feComposite
                  // in={displacementId}
                  // in2={sweepsId}
                  // operator="arithmetic"
                  // k1="0"
                  // k2="1"
                  // k3="1"
                  // k4="0"
                  // />
                )}
              </SweepFilters>
            )}
          </SobelFilter>
        )}
      </DisplacementFilter>
    </svg>
  </Root>
);
