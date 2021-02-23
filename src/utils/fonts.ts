import { FontFamily, FontStyle, FontVariant, FontWeight } from "../types/fonts";

export const convertVariantToText = (variant: string) => {
  const names: Record<FontWeight, string> = {
    "100": "Thin",
    "200": "Extra-Light",
    "300": "Light",
    regular: "Regular",
    "500": "Medium",
    "600": "Semi-Bold",
    "700": "Bold",
    "800": "Extra-Bold",
    "900": "Black",
  };

  const match = variant.match(/(\d+|regular)/);

  let name = "Regular";
  if (match) {
    const weight = match[1] as FontWeight;
    name = names[weight];
  }
  if (variant.includes("italic")) {
    name += " Italic";
  }

  return name;
};

const GOOGLE_FONTS_API_URL = `https://www.googleapis.com/webfonts/v1/webfonts`;
const GOOGLE_FONTS_API_KEY = "AIzaSyBtuCeMB2g5Cqd-_MAly2wdDtIUI9-S5to";

export const fetchGoogleFonts = async () => {
  const url = `${GOOGLE_FONTS_API_URL}?sort=alpha&key=${GOOGLE_FONTS_API_KEY}`;
  const response = await fetch(url);
  const { items } = await response.json();
  return items as { family: FontFamily; variants: FontVariant[] }[];
};

export const extractFontWeight = (variant: FontVariant): FontWeight => {
  const match = variant.match(/(\d+|regular)?(\w*)/);
  return match ? match[1] : "regular";
};

export const extractFontStyle = (variant: FontVariant): FontStyle => {
  const match = variant.match(/(\d+|regular)?(\w*)/);
  return match ? match[2] : "regular";
};
