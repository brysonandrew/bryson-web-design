import type { FC } from 'react';
import type { TFilterChildrenProps } from '../config/types';
import { Filter } from './Filter';
import type { TDisplacementProps } from './config';

export const DISPLACEMENT_ID = 'DisplacementId';
type TChildrenProps = TFilterChildrenProps;
type TProps = TChildrenProps & TDisplacementProps;

export const Displacement: FC<TProps> = ({
  external,
  children,
  id = DISPLACEMENT_ID,
  ...props
}) => (
  <>
    <filter
      id={id}
      x='-600%'
      y='-600%'
      height='1300%'
      width='1300%'
    >
      <Filter {...props} id={id} source='SourceGraphic' />
      {children && children(id)}
    </filter>
    {external && external(id)}
  </>
);
