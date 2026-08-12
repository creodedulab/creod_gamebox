import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const GAME_ROOT = path.join(process.cwd(), "public", "games");
const OUTPUT_FILE = path.join(process.cwd(), "app", "games-data.ts");

const G = {
  shooting: "\uC288\uD305",
  fighting: "\uACA9\uD22C",
  jump: "\uC810\uD504",
  slash: "\uC2AC\uB798\uC2DC",
  rpg: "\uB864\uD50C\uB808\uC789",
  strategy: "\uC804\uB7B5",
  simulation: "\uC2DC\uBBAC\uB808\uC774\uC158",
  adventure: "\uC5B4\uB4DC\uBCA4\uCC98",
  puzzle: "\uD37C\uC990",
  sports: "\uC2A4\uD3EC\uCE20",
  rhythm: "\uB9AC\uB4EC",
  battleRoyale: "\uBC30\uD2C0\uB85C\uC584",
  horror: "\uD638\uB7EC",
  arcade: "\uC544\uCF00\uC774\uB4DC",
  healing: "\uD790\uB9C1",
  twoD: "2D",
  threeD: "3D",
  secondPerson: "2\uC778\uCE6D",
  thirdPerson: "3\uC778\uCE6D",
  onePlayer: "1\uC778\uC6A9",
  twoPlayer: "2\uC778\uC6A9",
};

const GENRES = [
  G.shooting,
  G.fighting,
  G.jump,
  G.slash,
  G.rpg,
  G.strategy,
  G.simulation,
  G.adventure,
  G.puzzle,
  G.sports,
  G.rhythm,
  G.battleRoyale,
  G.horror,
  G.arcade,
  G.healing,
  G.twoD,
  G.threeD,
  G.secondPerson,
  G.thirdPerson,
  G.onePlayer,
  G.twoPlayer,
];

const MANUAL_GENRE_OVERRIDES = {
  "dense-forest-bunny-escape": {
    add: [G.secondPerson, G.arcade],
  },
  "nunchi-league": {
    add: [G.arcade, G.strategy],
  },
  "aim-speed-test": {
    remove: [G.rpg],
  },
  "space-defender-carrot": {
    remove: [G.jump],
  },
  "unit-craft-science-code": {
    remove: [G.jump, G.sports],
  },
  cozy_aquarium_studio: {
    add: [G.healing],
    remove: [G.jump, G.strategy],
  },
};

function parseSetting(raw) {
  const data = {};
  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^\s*(?:\d+\.)?([a-zA-Z_]+)\s*=\s*\[(.*)]\s*$/);
    if (match) data[match[1]] = match[2].trim();
  }
  return data;
}

function inferGenres(html, slug) {
  const source = `${slug}\n${html}`.toLowerCase();
  const scores = new Map(GENRES.map((genre) => [genre, 0]));
  const add = (genre, amount) => scores.set(genre, (scores.get(genre) ?? 0) + amount);
  const has = (...tokens) => tokens.some((token) => source.includes(token.toLowerCase()));

  if (has("shoot", "bullet", "gun", "laser", "enemy", "spaceship")) add(G.shooting, 4);
  if (has("fight", "attack", "punch", "kick", "combo")) add(G.fighting, 4);
  if (has("jump", "gravity", "platform", "grounded", "vy", "dash")) add(G.jump, 5);
  if (has("slash", "cut", "blade", "sword", "knife")) add(G.slash, 5);
  if (has("level", "quest", "exp", "skill", "inventory")) add(G.rpg, 3);
  if (has("strategy", "tower", "unit", "build", "resource")) add(G.strategy, 3);
  if (has("simulation", "simulate", "farm", "manage")) add(G.simulation, 3);
  if (has("adventure", "story", "escape", "map")) add(G.adventure, 3);
  if (has("puzzle", "maze", "match", "solve", "code")) add(G.puzzle, 4);
  if (has("score", "best", "highscore", "arcade", "endless", "timer")) add(G.arcade, 4);
  if (has("sport", "ball", "goal", "soccer", "basket")) add(G.sports, 4);
  if (has("rhythm", "beat", "music", "note")) add(G.rhythm, 4);
  if (has("battle royale", "last man", "survive")) add(G.battleRoyale, 4);
  if (has("horror", "ghost", "dark", "fear")) add(G.horror, 4);
  if (has("heal", "relax", "cozy", "aquarium", "garden")) add(G.healing, 4);
  if (has("canvas", "ctx", "2d", "sprite")) add(G.twoD, 5);
  if (has("three", "webgl", "3d", "camera")) add(G.threeD, 5);
  if (has("third-person", "character", "player")) add(G.thirdPerson, 2);
  add(G.onePlayer, 3);
  if (has("player2", "two player", "p2", "multiplayer")) add(G.twoPlayer, 4);

  const ranked = [...scores.entries()]
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([genre]) => genre);

  const selected = [...new Set(ranked)].slice(0, 4);
  for (const fallback of [G.twoD, G.onePlayer, G.arcade]) {
    if (selected.length >= 2) break;
    if (!selected.includes(fallback)) selected.push(fallback);
  }
  return selected;
}

function applyGenreOverrides(slug, genres) {
  const override = MANUAL_GENRE_OVERRIDES[slug];
  let next = [...genres];

  if (override?.remove) {
    next = next.filter((genre) => !override.remove.includes(genre));
  }

  if (override?.add) {
    for (const genre of override.add) {
      if (!next.includes(genre)) next.push(genre);
    }
  }

  for (const fallback of [G.twoD, G.onePlayer, G.arcade]) {
    if (next.length >= 2) break;
    if (!next.includes(fallback)) next.push(fallback);
  }

  return next.filter((genre) => GENRES.includes(genre));
}

function inferControls(html) {
  const lower = html.toLowerCase();
  const controls = [];
  if (lower.includes("arrowleft") || lower.includes("arrowright")) controls.push("\uBC29\uD5A5\uD0A4");
  if (lower.includes("keyw") || lower.includes("wasd")) controls.push("WASD");
  if (lower.includes("space")) controls.push("\uC2A4\uD398\uC774\uC2A4\uBC14");
  if (lower.includes("pointer") || lower.includes("touch") || lower.includes("click")) {
    controls.push("\uB9C8\uC6B0\uC2A4/\uD130\uCE58");
  }
  return controls.length
    ? [...new Set(controls)].join(", ")
    : "\uAC8C\uC784 \uD654\uBA74 \uC548\uB0B4\uB97C \uD655\uC778\uD558\uC138\uC694.";
}

function inferDescription(name, genres, html) {
  if (genres.includes(G.healing)) {
    return `${name}\uC740 \uD3B8\uC548\uD55C \uBD84\uC704\uAE30\uC5D0\uC11C \uD654\uBA74\uC744 \uAD00\uCC30\uD558\uACE0 \uC870\uC791\uD558\uBA70 \uC990\uAE30\uB294 \uD790\uB9C1\uD615 HTML \uAC8C\uC784\uC785\uB2C8\uB2E4.`;
  }
  if (genres.includes(G.jump) && genres.includes(G.slash)) {
    return `${name}\uC740 \uC810\uD504\uC640 \uB300\uC2DC, \uC808\uB2E8 \uC561\uC158\uC744 \uD65C\uC6A9\uD574 \uC7A5\uC560\uBB3C\uC744 \uB3CC\uD30C\uD558\uBA70 \uB192\uC740 \uAE30\uB85D\uC5D0 \uB3C4\uC804\uD558\uB294 \uC561\uC158 \uC544\uCF00\uC774\uB4DC \uAC8C\uC784\uC785\uB2C8\uB2E4.`;
  }
  if (genres.includes(G.shooting)) {
    return `${name}\uC740 \uC801\uACFC \uC7A5\uC560\uBB3C\uC744 \uD53C\uD558\uAC70\uB098 \uACF5\uACA9\uD558\uBA70 \uC810\uC218\uB97C \uC313\uB294 \uC288\uD305 \uC911\uC2EC \uAC8C\uC784\uC785\uB2C8\uB2E4.`;
  }
  if (genres.includes(G.puzzle)) {
    return `${name}\uC740 \uADDC\uCE59\uC744 \uD30C\uC545\uD558\uACE0 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uBA70 \uBAA9\uD45C\uC5D0 \uB3C4\uB2EC\uD558\uB294 \uD37C\uC990 \uAC8C\uC784\uC785\uB2C8\uB2E4.`;
  }
  if (html.toLowerCase().includes("endless")) {
    return `${name}\uC740 \uBC18\uBCF5 \uD50C\uB808\uC774\uB97C \uD1B5\uD574 \uB354 \uB192\uC740 \uAE30\uB85D\uC5D0 \uB3C4\uC804\uD558\uB294 \uC5D4\uB4DC\uB9AC\uC2A4 \uC2A4\uD0C0\uC77C \uAC8C\uC784\uC785\uB2C8\uB2E4.`;
  }
  return `${name}\uC740 \uD559\uC0DD\uC774 \uC9C1\uC811 \uC124\uACC4\uD558\uACE0 \uAD6C\uD604\uD55C HTML \uAC8C\uC784\uC785\uB2C8\uB2E4. \uD654\uBA74\uC758 \uADDC\uCE59\uC744 \uC775\uD788\uBA70 \uBAA9\uD45C \uB2EC\uC131\uC5D0 \uB3C4\uC804\uD574\uBCF4\uC138\uC694.`;
}

function findPoster(files, slug) {
  const found = files.find((file) => /^poster\.(png|jpe?g|webp|gif)$/i.test(file));
  return found ? `/games/${slug}/${found}` : "";
}

function accentFor(index) {
  return ["#46a3ff", "#f5a524", "#22c55e", "#ef4444", "#8b5cf6", "#06b6d4"][index % 6];
}

function escapeNonAscii(value) {
  return value.replace(/[^\x00-\x7F]/g, (char) =>
    `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

const koreanNameCollator = new Intl.Collator("ko-KR", {
  numeric: true,
  sensitivity: "base",
});

const entries = await readdir(GAME_ROOT, { withFileTypes: true });
const games = [];

for (const entry of entries.filter((item) => item.isDirectory())) {
  const slug = entry.name;
  const folder = path.join(GAME_ROOT, slug);
  const files = await readdir(folder);
  if (!files.includes("index.html")) continue;

  const html = await readFile(path.join(folder, "index.html"), "utf8");
  let setting = {};
  if (files.includes("setting.txt")) {
    setting = parseSetting(await readFile(path.join(folder, "setting.txt"), "utf8"));
  }

  const engName = setting.eng_name && setting.eng_name !== "*" ? setting.eng_name : slug;
  const korName = setting.kor_name && setting.kor_name !== "*" ? setting.kor_name : engName;
  const maker =
    setting.maker && setting.maker !== "*" ? setting.maker : "\uC81C\uC791\uC790 \uBBF8\uC785\uB825";
  const genres = applyGenreOverrides(slug, inferGenres(html, slug));
  const controls = inferControls(html);
  const description = inferDescription(korName, genres, html);

  games.push({
    id: slug,
    korName,
    engName,
    maker,
    genres,
    genre: genres[0],
    poster: findPoster(files, slug),
    posterAlt: `${korName} \uAC8C\uC784 \uD3EC\uC2A4\uD130`,
    description,
    controls,
    gameUrl: `/games/${slug}/index.html`,
    accent: accentFor(games.length),
  });
}

games.sort(
  (a, b) =>
    koreanNameCollator.compare(a.korName, b.korName) ||
    koreanNameCollator.compare(a.engName, b.engName) ||
    a.id.localeCompare(b.id),
);

const content = escapeNonAscii(`export type Game = {
  id: string;
  korName: string;
  engName: string;
  maker: string;
  genres: string[];
  genre: string;
  poster: string;
  posterAlt: string;
  description: string;
  controls: string;
  gameUrl: string;
  accent: string;
};

export const genreOptions = ${JSON.stringify(GENRES, null, 2)} as const;

export const games: Game[] = ${JSON.stringify(games, null, 2)};
`);

await writeFile(OUTPUT_FILE, content, "utf8");
console.log(`Generated ${games.length} games into app/games-data.ts`);
