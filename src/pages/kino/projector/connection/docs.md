await this.pc2.setRemoteDescription({
  type: 'offer',
  sdp: offer.sdp.replace('red/90000', 'green/90000'),
});
