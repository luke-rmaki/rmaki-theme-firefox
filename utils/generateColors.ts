import { calculateVariantLightness } from "./calculateVariantLightness.ts";
import { Hues, Lightness, Saturation } from "./Colors.ts";
import { convert } from "./colorConversion/convert.ts";

export function generateColors() {
  const purple = convert(Hues.Purple, Saturation.Purple, Lightness.Purple);
  const black = convert(Hues.Black, Saturation.Black, Lightness.Black);
  const accent = convert(Hues.Accent, Saturation.Accent, Lightness.Accent);
  const white = convert(Hues.White, Saturation.White, Lightness.White);

  const purpleLightOne = convert(
    Hues.Purple,
    Saturation.Purple,
    calculateVariantLightness(Lightness.Purple, "light", 1),
  );
  const purpleLightTwo = convert(
    Hues.Purple,
    Saturation.Purple,
    calculateVariantLightness(Lightness.Purple, "light", 2),
  );
  const purpleDarkOne = convert(
    Hues.Purple,
    Saturation.Purple,
    calculateVariantLightness(Lightness.Purple, "dark", 1),
  );
  const purpleDarkTwo = convert(
    Hues.Purple,
    Saturation.Purple,
    calculateVariantLightness(Lightness.Purple, "dark", 2),
  );

  const blackLightOne = convert(
    Hues.Black,
    Saturation.Black,
    calculateVariantLightness(Lightness.Black, "light", 1),
  );
  const blackLightTwo = convert(
    Hues.Black,
    Saturation.Black,
    calculateVariantLightness(Lightness.Black, "light", 2),
  );

  return {
    purple,
    black,
    accent,
    white,
    purpleLightOne,
    purpleLightTwo,
    purpleDarkOne,
    purpleDarkTwo,
    blackLightOne,
    blackLightTwo,
  };
}
