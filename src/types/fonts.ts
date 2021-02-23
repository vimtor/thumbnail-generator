export type FontFamily = string;
export type FontWeight = string;
export type FontStyle = string;
export type FontVariant = string;

type FontProperties = {
  size: number | string;
  family: FontFamily;
  weight: FontWeight;
  style: FontStyle;
  variant: FontVariant;
  color: string;
};

export default FontProperties;
