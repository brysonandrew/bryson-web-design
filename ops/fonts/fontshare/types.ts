export type TFontshareFont = {
  ascending_leading: number;
  body_height: number;
  cap_height: number;
  descending_leading: number;
  max_char_width: number;
  x_height: number;
  y_max: number;
  y_min: number;
};
// {
//   ;
// "weight":{
//   "label":string;
//   "name":string;
// "native_name":number;
// "number":number;
// "weight":number}
// };

export type TFontshareFontResult = {
  count: number;
  count_total: number;
  fonts: TFontshareFont[];
  has_more: boolean;
};
