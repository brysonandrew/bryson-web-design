import styled from '@emotion/styled';
import { WheelEventHandler } from 'react';
import { Button1 as Button } from '../components/Buttons';
import { useReader } from '../context';

const Root = styled.div``;

export const Settings = () => {
  const {
    volumeState: [volume, setVolume],
    rateState: [rate, setRate],
    pitchState: [pitch, setPitch],
    langState: [lang, setLang],
    voicesState: [voices, setVoices],
  } = useReader();

  return (
    <Root className='row'>
      <Button
        onWheelCapture={
          ((event) => {
            const delta = event.deltaY * 0.001;
            if (delta > 0.001 || delta < -0.001) {
              setVolume((prev) => {
                const next = prev + delta;
                if (next <= 1 && next >= 0) {
                  return next;
                } else {
                  return prev;
                }
              });
            }
          }) as WheelEventHandler<HTMLButtonElement>
        }
      >
        {['▁', '▄', '▆', '█'][~~(volume * 4 - 0.01)]}
      </Button>
      <Button
        onWheelCapture={
          ((event) => {
            const delta = event.deltaY * 0.01;
            if (delta > 0.01 || delta < -0.01) {
              setRate((prev) => {
                const next = prev + delta;
                if (next <= 10 && next >= 0) {
                  return next;
                } else {
                  return prev;
                }
              });
            }
          }) as WheelEventHandler<HTMLButtonElement>
        }
      >
        ×<small>{rate.toFixed(1)}</small>
      </Button>
      <Button
        onWheelCapture={
          ((event) => {
            const delta = event.deltaY * 0.01;
            if (delta > 0.01 || delta < -0.01) {
              setPitch((prev) => {
                const next = prev + delta;
                if (next <= 2 && next >= 0) {
                  return next;
                } else {
                  return prev;
                }
              });
            }
          }) as WheelEventHandler<HTMLButtonElement>
        }
      >
        ♩<small>{pitch.toFixed(1)}</small>
      </Button>
    </Root>
  );
};
