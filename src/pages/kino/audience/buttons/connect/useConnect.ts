import { TError } from '@t/index';
import { useKino } from '../../../context';

export const useConnect = () => {
  const { localConnection, remoteConnection } = useKino();
  const handler = async () => {
    console.log('CONNECT');
    try {
      const offer = await localConnection.createOffer();
      await localConnection.setLocalDescription(offer);
      if (!localConnection.localDescription) return null;
      remoteConnection.setRemoteDescription(
        localConnection.localDescription,
      );

      const answer = await remoteConnection.createAnswer();
      await remoteConnection.setLocalDescription(answer);
      if (!remoteConnection.localDescription) return null;
      await localConnection.setRemoteDescription(
        remoteConnection.localDescription,
      );
    } catch (error: TError) {
      console.log(
        `Unable to create an offer: ${error.toString()}`,
      );
    }
  };

  return handler;
};
