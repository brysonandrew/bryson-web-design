import type { FC } from 'react';
import { useEffect } from 'react';
import { useReader } from '../../src/pages/reader/context';
import { VisualizerCanvas } from '../../src/pages/reader/canvas';

type TProps = {
  mediaStream: MediaStream;
};
export const DeviceHandler: FC<TProps> = ({
  mediaStream,
}) => {
  const { context, master } = useReader();
  useEffect(() => {
    const initSource = async () => {
      try {
        mediaStream.addEventListener('addtrack', () => {
          console.log('track added');
        });

        const source: MediaStreamAudioSourceNode =
          await context.createMediaStreamSource(
            mediaStream,
          );
        console.log(source);
        source.connect(master);
        source.connect(context.destination);
        master.connect(context.destination);

        // initChorus();
        const destination: MediaStreamAudioDestinationNode =
          await context.createMediaStreamDestination();
        master.connect(destination);
        source.connect(destination);

        // dispatch({ type: "selectSource", value: "mic" });
      } catch (error) {
        console.log(
          'The following gUM error occured: ' + error,
        );
      }
    };
    initSource();
    window.addEventListener('click', () => {
      context.resume();
    });
    return () => {
      master.disconnect();
      window.removeEventListener('click', () => {
        context.resume();
      });
    };
  }, [mediaStream]);


  return <VisualizerCanvas />;
};
