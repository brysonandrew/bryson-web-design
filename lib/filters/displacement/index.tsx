import type { FC } from 'react';
import type {
  TFilterChildrenProps,
  TFilterProps,
} from '../config/types';
import { INTENSITY, TURBULANCE_DEFAULTS } from './config';
import type { TDisplacementProps } from './config';

const BASE_ANIMATION = {
  repeatCount: 'indefinite',
  dur: '10s',
};

export const DISPLACEMENT_ID = 'DisplacementId';
type TChildrenProps = TFilterChildrenProps;
type TProps = TChildrenProps &
  TDisplacementProps &
  TFilterProps;

export const Displacement: FC<TProps> = ({
  external,
  children,
  id = DISPLACEMENT_ID,
  intensity = INTENSITY,
  source = id,
  result = id,
  begin,
  ...props
}) => {
  const baseAnimation = { ...BASE_ANIMATION, begin };
  return (
    <>
      <filter
        id={id}
        x='-600%'
        y='-600%'
        height='1300%'
        width='1300%'
      >
        <>
          <feTurbulence
            {...TURBULANCE_DEFAULTS}
            type='turbulence'
            in={source}
            result={`${id}-turbulence`}
            {...props}
          >
            <animate
              attributeName='baseFrequency'
              values='0 1;0 2;0 1'
              {...baseAnimation}
            />
            <animate
              attributeName='numOctaves'
              values='2;0;2'
              {...baseAnimation}
            />
          </feTurbulence>
          <feMorphology
            in={`${id}-turbulence`}
            operator='erode'
            radius='6'
            result={`${id}-morph`}
          >
            <animate
              attributeName='radius'
              values='6;8;6'
              {...baseAnimation}
            />
          </feMorphology>
          <feOffset
            in={source}
            dx={-intensity * 0.5}
            dy={-intensity * 0.5}
            result='offset'
          >
            <animate
              attributeName='dx'
              values={`${-intensity * 0.25};${
                -intensity * 0.5
              };${-intensity * 0.25}`}
              {...baseAnimation}
            />
            <animate
              attributeName='dy'
              values={`${-intensity * 0.25};${
                -intensity * 0.5
              };${-intensity * 0.25}`}
              {...baseAnimation}
            />
          </feOffset>
          <feDisplacementMap
            in2={`${id}-morph`}
            in='offset'
            scale={intensity}
            xChannelSelector='R'
            yChannelSelector='G'
            result={'DISPLACEMENT'}
          >
            <animate
              attributeName='scale'
              values={`${intensity * 0.5};${intensity};${
                intensity * 0.5
              }`}
              {...baseAnimation}
            />
          </feDisplacementMap>
          {children && children(result)}
        </>
        {children && children(id)}
      </filter>
      {external && external(id)}
    </>
  );
};
