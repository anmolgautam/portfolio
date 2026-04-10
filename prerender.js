import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const { render } = await import("./dist/server/entry-server.js");
  const appHtml = render();

  const indexPath = path.resolve(__dirname, "dist/index.html");
  const template = fs.readFileSync(indexPath, "utf-8");

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(indexPath, html);

  // Clean up server build artifacts
  fs.rmSync(path.resolve(__dirname, "dist/server"), { recursive: true });

  console.log("Pre-rendered successfully! dist/index.html now contains full HTML content.");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
