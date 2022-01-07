import { build } from "esbuild";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

build({
  target: "es2015",
  platform: "browser",
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outdir: "dist",
  minify: true,
  sourcemap: false,
  metafile: true,
  plugins: [
    htmlPlugin({
      files: [
        {
          filename: "index.html",
          entryPoints: ["src/index.tsx"],
          htmlTemplate: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>esbuild-html-plugin-app</title>
    </head>
    <body>
        <div id="root">
        </div>
    </body>
    </html>
  `,
        },
      ],
    }),
  ],
}).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
