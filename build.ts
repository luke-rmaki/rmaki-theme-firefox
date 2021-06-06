import { generateColors } from "./utils/generateColors.ts";
import { generateManifest } from "./generateManifest.ts";
import { generateZip } from "./generateZip.ts";

function build() {
  const version = Deno.args[0] ?? "1";
  const colors = generateColors();
  const manifest = generateManifest(colors, version);
  generateZip(manifest);
}

build();
