// Runs after `react-scripts build`: renders the main page to static HTML so crawlers
// (Google, Bing, AI search bots) can read the content without executing JavaScript.
import fs from "fs";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "../src/App";
import { structuredData } from "../src/data/StructuredData";

const indexPath = path.join(__dirname, "..", "build", "index.html");
const template = fs.readFileSync(indexPath, "utf8");

const sheet = new ServerStyleSheet();
try {
  const appHtml = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  const jsonLd = `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`;

  if (!template.includes('<div id="root"></div>')) {
    throw new Error("Could not find empty #root in build/index.html");
  }

  const html = template.replace("</head>", `${styleTags}${jsonLd}</head>`).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  fs.writeFileSync(indexPath, html);
  console.log("Prerendered build/index.html");
} finally {
  sheet.seal();
}
