import styled from '@emotion/styled';
import { useReader } from '../../context';
import { Item } from './Item';

const Root = styled.div``;

export const Settings = () => {
  const { rateState, pitchState } =
    useReader();

  return (
    <Root className='column gap-4 w-36'>
      <Item
        title='Rate'
        iconClassValue='ion-speedometer h-3.5'
        state={rateState}
        min={0}
        max={10}
        step={0.05}
      />
      <Item
        title='Pitch'
        iconClassValue='mdi ion-musical-note h-4'
        state={pitchState}
        min={0}
        max={2}
        step={0.02}
      />
    </Root>
  );
};
