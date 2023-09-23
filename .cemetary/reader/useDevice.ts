type TMediaDevices = 'audiooutput' | 'audioinput';

export const useDevice = () => {
  const init = async () => {
    try {
      const devices =
        await navigator.mediaDevices.enumerateDevices();
      const noiseOutputDevices: MediaDeviceInfo[] =
        devices.filter(
          (device) =>
            device.kind ===
              ('audioinput' as TMediaDevices) &&
            device.deviceId !== 'default',
        );
      const first: MediaDeviceInfo = noiseOutputDevices[0];
      if (first) {
        // const config = {
        //   audio: { deviceId: { exact: first.deviceId } },
        // };
        // const mediaStream: MediaStream =
        //   await navigator.mediaDevices.getUserMedia(
        //     config,
        //   );
        // console.log(mediaStream.getNoiseTracks());
        // console.log(mediaStream.getTracks());
        //setStream(mediaStream);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
