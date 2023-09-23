import styled from '@emotion/styled';
import { Range } from '../../components/Inputs';
import { useReader } from '../../context';
import { P1 } from '@components/space/P1';

const Root = styled.div`
  & i {
    width: 24px;
    height: 24px;
  }
`;

export const Settings = () => {
  const {
    volumeState: [volume, setVolume],
    rateState: [rate, setRate],
    pitchState: [pitch, setPitch],
  } = useReader();

  return (
    <Root className='column'>
      <label className='row'>
        <i className='mdi i-mdi-volume' />
        <P1 />
        <Range
          className=''
          type='range'
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={({ currentTarget: { value } }) =>
            setVolume(+value)
          }
        />
        <P1 />
        <kbd>{volume.toFixed(2)}</kbd>
      </label>
      <P1 />

      <label className='row'>
        <i className='i-ion-speedometer' />
        <P1 />
        <Range
          className=''
          type='range'
          value={rate}
          min={0}
          max={10}
          step={0.05}
          onChange={({ currentTarget: { value } }) =>
            setRate(+value)
          }
        />
        <P1 />
        <kbd>{rate.toFixed(2)}</kbd>
      </label>
      <P1 />
      <label className='row'>
        <i className='mdi i-ion-musical-note' />
        <P1 />
        <Range
          className=''
          type='range'
          value={pitch}
          min={0}
          max={2}
          step={0.02}
          onChange={({ currentTarget: { value } }) =>
            setPitch(+value)
          }
        />
        <P1 />
        <kbd>{pitch.toFixed(2)}</kbd>
      </label>
    </Root>
  );
};
