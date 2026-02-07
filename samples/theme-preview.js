/*
 * Hanabi Theme JavaScript Preview
 * This file is intentionally dense so you can inspect syntax colors quickly.
 * It is for visual checks, not production use.
 */

"use strict";

// TODO: Verify comment contrast, punctuation visibility, and keyword balance.
// NOTE: Keep this file in plain JavaScript (no TypeScript) for broad compatibility.

const palette = Object.freeze({
  background: "#111218",
  foreground: "#E6EAF2",
  accent: "#6EC1FF",
  warning: "#FFD166",
  danger: "#FF5D73",
});

const strings = [
  'single-quoted string',
  "double-quoted string",
  `template string with interpolation: ${palette.accent.toLowerCase()} and unicode \u{2728}`,
  String.raw`raw string with escapes: \n \t \u2713`,
];

const numbers = {
  int: 42,
  float: 3.14159,
  exponent: 6.022e23,
  separator: 1_000_000,
  hex: 0xff,
  binary: 0b1010_0110,
  octal: 0o755,
  bigint: 9_007_199_254_740_991n,
};

const states = {
  ready: true,
  paused: false,
  empty: null,
  missing: undefined,
};

const tokenPattern = /(?<word>[A-Za-z_$][\w$]*)|(?<number>\d+(?:\.\d+)?)/gu;
const marker = Symbol("hanabi-marker");

class ThemeProbe extends Error {
  static version = "0.1.0";
  #events = [];
  #state = "idle";

  constructor(name = "Hanabi") {
    super(`Theme probe started for ${name}`);
    this.name = "ThemeProbe";
    this.createdAt = new Date();
    this[marker] = true;
  }

  get state() {
    return this.#state;
  }

  set state(next) {
    this.#state = next?.trim?.() || "idle";
  }

  log(event, level = "info", ...details) {
    this.#events.push({ event, level, details, at: Date.now() });
    return this;
  }

  async *scan(lines = []) {
    for (const line of lines) {
      await Promise.resolve();
      yield line.match(tokenPattern);
    }
  }

  toJSON() {
    return {
      name: this.name,
      state: this.#state,
      createdAt: this.createdAt.toISOString(),
      events: this.#events,
      marker: this[marker],
    };
  }
}

function tag(stringsPart, ...values) {
  return stringsPart.reduce(
    (acc, part, index) => acc + part + (values[index] ?? ""),
    ""
  );
}

function formatMessage(type = "info", ...parts) {
  return `[${type.toUpperCase()}] ${parts.join(" | ")}`;
}

const square = (n = 0) => n ** 2;
const choose = (value) => value ?? "fallback";

function renderAnsiPreview(label = "ANSI preview") {
  const rows = [
    "\x1b[30mblack\x1b[0m",
    "\x1b[31mred\x1b[0m",
    "\x1b[32mgreen\x1b[0m",
    "\x1b[33myellow\x1b[0m",
    "\x1b[34mblue\x1b[0m",
    "\x1b[35mmagenta\x1b[0m",
    "\x1b[36mcyan\x1b[0m",
    "\x1b[37mwhite\x1b[0m",
  ];
  console.log(`\n${label}: ${rows.join("  ")}`);
}

async function main() {
  const probe = new ThemeProbe("Hanabi");
  probe.state = " running ";

  const header = tag`Theme ${ThemeProbe.version} :: ${new Date().toISOString()}`;
  const regexCheck = "const x = 10;".match(tokenPattern)?.groups ?? {};

  probe
    .log("init", "info", header)
    .log("palette", "debug", JSON.stringify(palette))
    .log("strings", "debug", ...strings)
    .log("regex", "debug", JSON.stringify(regexCheck));

  const input = [
    "const theme = 'hanabi';",
    "let alpha = 0.8;",
    "class Box { #id = 1; }",
  ];

  for await (const matches of probe.scan(input)) {
    console.log(formatMessage("scan", JSON.stringify(matches)));
  }

  const maybeUser = { profile: { name: "Aoi", email: "aoi@example.com" } };
  const displayName = maybeUser?.profile?.displayName ?? maybeUser?.profile?.name ?? "guest";

  let score = 0;
  score ||= 10;
  score &&= 8;
  score ??= 0;

  const { int: base, ...rest } = numbers;
  const merged = { ...states, ...rest, displayName, base };
  const unique = [...new Set(["red", "blue", "red", "green"])];

  switch (displayName.length) {
    case 0:
      console.warn("empty name");
      break;
    case 3:
      console.info("short name");
      break;
    default:
      console.info("normal name");
      break;
  }

  try {
    if (!merged.ready) {
      throw new ThemeProbe("Theme not ready");
    }
  } catch (error) {
    if (error instanceof ThemeProbe) {
      console.error(formatMessage("error", error.message));
    } else {
      throw error;
    }
  } finally {
    console.debug("finalize");
  }

  const total = [1, 2, 3, 4]
    .map((n) => square(n))
    .filter((n) => n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);

  const lines = new Map([
    ["display", choose(displayName)],
    ["total", total],
    ["merged", JSON.stringify(merged, null, 2)],
    ["unique", unique.join(", ")],
  ]);

  for (const [key, value] of lines) {
    console.log(`${key}:`, value);
  }

  renderAnsiPreview();
  return probe;
}

void main();
