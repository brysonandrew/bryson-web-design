import type { TParamRecord } from "./config";

type THandlerConfig = {
  node: AudioWorkletNode;
  paramRecord: TParamRecord;
};
export const useParams = () => {
  const handler = ({
    node,
    paramRecord,
  }: THandlerConfig) => {
    const entries = Object.entries(paramRecord);
    for (const [key, { value }] of entries) {
      node.parameters.get(key).value = value;
    }
  };
  return handler;
};
