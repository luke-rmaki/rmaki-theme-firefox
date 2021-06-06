// deno-lint-ignore-file no-explicit-any
import { JSZip } from "https://deno.land/x/jszip/mod.ts";

export async function generateZip(manifest: any) {
  try {
    Deno.removeSync("theme.zip");
  } catch (error) {
    console.log(`There was an error removing the file ${error}`);
  }

  try {
    const zip = new JSZip();
    zip.addFile("manifest.json", JSON.stringify(manifest));

    await zip.writeZip("theme.zip");
    console.log(`Manifest generated`);
  } catch (error) {
    console.log(`There was an error creating the zip ${error}`);
  }
}
