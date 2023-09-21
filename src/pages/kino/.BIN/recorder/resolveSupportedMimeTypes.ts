export const SOURCE_BUFFER_MIME =
  'video/webm; codecs="vp8, vorbis"';
export const RECORDER_MIME = 'video/webm; codecs="vp8"';
    //export const RECORDER_MIME =  ; 

export const MIME_TYPES = [
  SOURCE_BUFFER_MIME,
  RECORDER_MIME,
  'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
  'video/mp4;codecs=h264,aac',
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm;codecs=h264,opus',
  'video/mp4;codecs=h264,aac',
];

export const resolveSupportedMimeTypes = () =>
  MIME_TYPES.filter((mimeType: string) =>
    MediaRecorder.isTypeSupported(mimeType),
  );
