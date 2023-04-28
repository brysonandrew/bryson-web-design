export type TFrequencyReponseParameters = Parameters<
  IIRFilterNode["getFrequencyResponse"]
>;

type TIirConfig = {
  context: AudioContext;
  parameters: any[][];
  frequencyReponseParameters: TFrequencyReponseParameters;
};
export const createIi = ({
  context,
  parameters,
  frequencyReponseParameters,
}: TIirConfig): IIRFilterNode => {
  const ii = (context.createIIRFilter as any)(
    ...parameters,
  );
  ii.getFrequencyResponse(...frequencyReponseParameters);
  return ii;
};

export const x = ({ context }: TIirConfig) => {
  const nFreqs = 30;
  let frequencyHz = new Float32Array(nFreqs);
  const magResponse = new Float32Array(nFreqs);
  const phaseResponse = new Float32Array(nFreqs);
  frequencyHz = frequencyHz.map((_, index) =>
    Math.pow(1.4, index),
  );

  const frequencyReponseParameters: any = [
    frequencyHz,
    magResponse,
    phaseResponse,
  ];

  const ii = createIi({
    context,
    parameters: [
      [
        0.00011314198115, 0.00033942594344,
        0.00033942594344, 0.00011314198115,
      ],
      [
        3.88183838983223, -11.15778893207433,
        10.70022228815451, -3.42336661006324,
      ],
    ],
    frequencyReponseParameters,
  });
};
