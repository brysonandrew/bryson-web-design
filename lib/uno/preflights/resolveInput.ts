export type TResolveInputConfig = {
  textColor: string;
  inputBackgroundColor: string;
  textColorDark?: string;
  inputBackgroundColorDark?: string;
};
export const resolveInput = ({
  textColor,
  inputBackgroundColor,
  textColorDark = textColor,
  inputBackgroundColorDark = inputBackgroundColor,
}: TResolveInputConfig) => `
input:-webkit-autofill {
  -webkit-text-fill-color: ${textColor} !important;
  text-fill-color: ${textColor} !important;
  filter: none;
  box-shadow: 0 0 0 100px ${inputBackgroundColor} inset;
}

html.dark input:-webkit-autofill {
  -webkit-text-fill-color: ${textColorDark} !important;
  text-fill-color: ${textColorDark} !important;
  filter: none;
  box-shadow: 0 0 0 100px ${inputBackgroundColorDark} inset;
}
`;
