#!/usr/bin/env node

import fs from "node:fs";

const args = process.argv.slice(2);
const flags = new Set(args.filter((arg) => arg.startsWith("--")));
const positional = args.filter((arg) => !arg.startsWith("--"));
const [inputPath, outputPath] = positional;
const lightSample = flags.has("--light-sample");

if (!inputPath || !outputPath) {
  console.error("Usage: node samples/generate-palette-preview.mjs <input.json> <output.svg> [--light-sample]");
  process.exit(1);
}

for (const flag of flags) {
  if (flag !== "--light-sample") {
    console.error(`Unknown option: ${flag}`);
    process.exit(1);
  }
}

if (flags.size > 1) {
  console.error("Too many options.");
  process.exit(1);
}

const palette = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const base = palette.base ?? [];
const ansi = palette.ansi ?? [];
const ui = palette.uiElements ?? [];
const tokens = [...base, ...ansi, ...ui];

if (tokens.length === 0) {
  console.error("No palette tokens found.");
  process.exit(1);
}

const byId = new Map(tokens.map((t) => [t.id, t]));

const width = 1716;
const height = 940;
const margin = 40;
const gridTop = 140;
const cols = 7;
const gapX = 16;
const gapY = 16;
const cardW = 220;
const cardH = 136;

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = Number.parseInt(h, 16);
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const toLinear = (v) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function textColor(bgHex) {
  return luminance(bgHex) > 0.42 ? "#172035" : "#edf0fa";
}

function pickContext(id) {
  if (id.startsWith("base.")) {
    if (id === "base.00") return byId.get("ui.07") ?? byId.get("ui.06") ?? byId.get("base.00");
    return byId.get("base.00") ?? byId.get("ui.07");
  }
  if (id.startsWith("ansi.")) {
    if (id === "ansi.00") return byId.get("ui.07") ?? byId.get("ui.06") ?? byId.get("ansi.00");
    return byId.get("ansi.00") ?? byId.get("ui.07");
  }
  if (id.startsWith("ui.")) {
    return byId.get("ui.06") ?? byId.get("ui.07") ?? tokens[0];
  }
  return tokens[0];
}

const lightSampleContext = {
  page: { id: "sample.page", name: "lightPage", hex: "#E9EEFF" },
  panel: { id: "sample.panel", name: "lightPanel", hex: "#EDF2FF" },
  surface: { id: "sample.surface", name: "lightSurface", hex: "#F7F9FF" },
};

function pickLightSampleContext(id) {
  if (id === "base.00") return lightSampleContext.panel;
  if (id.startsWith("ui.")) return lightSampleContext.panel;
  return lightSampleContext.surface;
}

const pageBg = lightSample ? lightSampleContext.page.hex : (byId.get("ui.07") ?? tokens[0]).hex;
const titleFg = textColor(pageBg);
const subtitleFg = luminance(pageBg) > 0.42 ? "#2b395d" : "#b8b3cf";
const metaFg = luminance(pageBg) > 0.42 ? "#4a5d89" : "#8d88a8";

const title = lightSample ? `${palette.name} Light Sample Preview` : `${palette.name} Palette Preview`;
const desc = lightSample
  ? "Visual sample: Hanabi Seed 35 accents on a light environment background."
  : "Each card background is set to a practical usage background for that token.";

const cards = tokens.map((token, index) => {
  const col = index % cols;
  const row = Math.floor(index / cols);
  const x = margin + col * (cardW + gapX);
  const y = gridTop + row * (cardH + gapY);

  const ctx = lightSample ? pickLightSampleContext(token.id) : pickContext(token.id);
  const ctxHex = ctx?.hex ?? pageBg;
  const ctxLabel = `${ctx?.id ?? "context"} ${ctx?.name ?? ""}`.trim();
  const fg = textColor(ctxHex);
  const border = luminance(ctxHex) > 0.42 ? "#9da9cc" : "#2a2738";
  const swatchBorder = luminance(token.hex) > 0.75 ? "#00000026" : "#00000033";

  return `
  <g transform="translate(${x} ${y})">
    <rect x="0" y="0" width="${cardW}" height="${cardH}" rx="12" fill="${ctxHex}" stroke="${border}" stroke-width="1" />
    <rect x="12" y="12" width="${cardW - 24}" height="66" rx="8" fill="${token.hex}" stroke="${swatchBorder}" stroke-width="1" />
    <text x="12" y="96" fill="${fg}" font-family="Menlo, Monaco, Consolas, monospace" font-size="13">${token.id} ${token.name}</text>
    <text x="12" y="113" fill="${fg}" font-family="Menlo, Monaco, Consolas, monospace" font-size="13">${token.hex}</text>
    <text x="12" y="129" fill="${fg}" font-family="Menlo, Monaco, Consolas, monospace" font-size="11">on ${ctxLabel} (${ctxHex})</text>
  </g>`;
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${desc}</desc>
  <rect x="0" y="0" width="${width}" height="${height}" fill="${pageBg}" />
  <text x="${margin}" y="56" fill="${titleFg}" font-family="Menlo, Monaco, Consolas, monospace" font-size="28" font-weight="700">${title}</text>
  <text x="${margin}" y="86" fill="${subtitleFg}" font-family="Menlo, Monaco, Consolas, monospace" font-size="16">Card background reflects practical usage context for each token</text>
  <text x="${margin}" y="110" fill="${metaFg}" font-family="Menlo, Monaco, Consolas, monospace" font-size="13">${lightSample ? `Light sample generated from ${inputPath}` : `Generated from ${inputPath}`}</text>
  ${cards.join("\n")}
</svg>
`;

fs.writeFileSync(outputPath, svg, "utf8");
console.log(`Generated ${outputPath}`);
