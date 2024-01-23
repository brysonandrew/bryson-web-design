import { NOOP } from '@brysonandrew/utils/functions';
import { useEffect } from 'react';

type TConfig = any;
export const useIpWebRtc = (config: TConfig) => {
  useEffect(() => {
    window.RTCPeerConnection = window.RTCPeerConnection;
    const pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel(''); //create a bogus data channel
    pc.createOffer(pc.setLocalDescription.bind(pc), NOOP); // create offer and set local description
    pc.onicecandidate = function (ice) {
      //listen for candidate events
      if (
        !ice ||
        !ice.candidate ||
        !ice.candidate.candidate
      )
        return;
      const myIP =
        /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(
          ice.candidate.candidate,
        )?.[1];
      console.log('my IP: ', myIP);
      pc.onicecandidate = NOOP;
    };
  });
};

const alt0 = async () => {
  const ip = await new Promise((resolve, reject) => {
    const conn = new RTCPeerConnection();
    conn.createDataChannel('');
    conn.createOffer(
      (offer) => conn.setLocalDescription(offer),
      reject,
    );
    conn.onicecandidate = (ice) => {
      if (ice && ice.candidate && ice.candidate.candidate) {
        resolve(ice.candidate.candidate.split(' ')[4]);
        conn.close();
      }
    };
  });
};
