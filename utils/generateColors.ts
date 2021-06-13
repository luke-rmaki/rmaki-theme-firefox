import { Hues, Lightness, Saturation, variants } from "./Colors.ts";
import { generateVariantCSS } from "./generateVariantCSS.ts";
import { convert } from "./colorConversion/convert.ts";

export function generateColors() {
  const purple = convert(Hues.Purple, Saturation.Purple, Lightness.Purple);
  const black = convert(Hues.Black, Saturation.Black, Lightness.Black);
  const accent = convert(Hues.Accent, Saturation.Accent, Lightness.Accent);
  const white = convert(Hues.White, Saturation.White, Lightness.White);

  const variantsRaw = generateVariantCSS();

  const variants = variantsRaw.map((variant) => {
    const name = Object.keys(variant)[0];
    const [h, s, l] = variant[name];
    return { [name]: convert(h, s, l) };
  });

  type Colors = {
    [key: string]: string;
  };

  const colors: Colors = {
    purple,
    black,
    accent,
    white,
  };

  variants.forEach((variant) => {
    const name = Object.keys(variant)[0];
    colors[name] = variant[name];
  });

  return colors
}

