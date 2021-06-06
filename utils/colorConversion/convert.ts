import { hslToHex } from "./hslToHex.ts";
import { hexToRgb } from "./hexToRgb.ts";

export function convert(h: number, s: number, l: number): string {
  const hex = hslToHex(h, s, l);
  const rgb = hexToRgb(hex);
  return rgb;
}
