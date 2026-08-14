export type Game = {
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

export const genreOptions = [
  "\uc288\ud305",
  "\uaca9\ud22c",
  "\uc810\ud504",
  "\uc2ac\ub798\uc2dc",
  "\ub864\ud50c\ub808\uc789",
  "\uc804\ub7b5",
  "\uc2dc\ubbac\ub808\uc774\uc158",
  "\uc5b4\ub4dc\ubca4\ucc98",
  "\ud37c\uc990",
  "\uc2a4\ud3ec\uce20",
  "\ub9ac\ub4ec",
  "\ubc30\ud2c0\ub85c\uc584",
  "\ud638\ub7ec",
  "\uc544\ucf00\uc774\ub4dc",
  "\ud790\ub9c1",
  "2D",
  "3D",
  "2\uc778\uce6d",
  "3\uc778\uce6d",
  "1\uc778\uc6a9",
  "2\uc778\uc6a9"
] as const;

export const games: Game[] = [
  {
    "id": "nunchi-league",
    "korName": "\ub208\uce58\ub9ac\uadf8",
    "engName": "NunChi League",
    "maker": "\uc804\uc8fc \ub3c4\ub2f4",
    "genres": [
      "1\uc778\uc6a9",
      "2D",
      "\uc544\ucf00\uc774\ub4dc",
      "\uc804\ub7b5"
    ],
    "genre": "1\uc778\uc6a9",
    "poster": "/games/nunchi-league/poster.png",
    "posterAlt": "\ub208\uce58\ub9ac\uadf8 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ub208\uce58\ub9ac\uadf8\uc740 \ud559\uc0dd\uc774 \uc9c1\uc811 \uc124\uacc4\ud558\uace0 \uad6c\ud604\ud55c HTML \uac8c\uc784\uc785\ub2c8\ub2e4. \ud654\uba74\uc758 \uaddc\uce59\uc744 \uc775\ud788\uba70 \ubaa9\ud45c \ub2ec\uc131\uc5d0 \ub3c4\uc804\ud574\ubcf4\uc138\uc694.",
    "controls": "\ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/nunchi-league/index.html",
    "accent": "#46a3ff"
  },
  {
    "id": "infinite-stairs-roblox",
    "korName": "\ub85c\ube14\ubb34\ud55c\uacc4\ub2e8",
    "engName": "Infinite Stairs Roblox",
    "maker": "\ubd80\uc548 \uc7ac\uc778",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "3D"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/infinite-stairs-roblox/poster.png",
    "posterAlt": "\ub85c\ube14\ubb34\ud55c\uacc4\ub2e8 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ub85c\ube14\ubb34\ud55c\uacc4\ub2e8\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/infinite-stairs-roblox/index.html",
    "accent": "#8b5cf6"
  },
  {
    "id": "dense-forest-bunny-escape",
    "korName": "\ubc84\ub2c8\uc758 \uc232 \ud0c8\ucd9c",
    "engName": "Dense Forest Bunny Escape",
    "maker": "\ubd80\uc548 \uc774\uc7ac",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "3D",
      "2\uc778\uce6d",
      "\uc544\ucf00\uc774\ub4dc"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/dense-forest-bunny-escape/poster.png",
    "posterAlt": "\ubc84\ub2c8\uc758 \uc232 \ud0c8\ucd9c \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ubc84\ub2c8\uc758 \uc232 \ud0c8\ucd9c\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/dense-forest-bunny-escape/index.html",
    "accent": "#ef4444"
  },
  {
    "id": "space-defender-carrot",
    "korName": "\uc2a4\ud398\uc774\uc2a4 \ub514\ud39c\ud130 \uce90\ub7ff",
    "engName": "Space Defender Carrot",
    "maker": "\uc804\uc8fc \uae40\uc81c",
    "genres": [
      "2D",
      "\uc288\ud305",
      "\ud37c\uc990"
    ],
    "genre": "2D",
    "poster": "/games/space-defender-carrot/poster.png",
    "posterAlt": "\uc2a4\ud398\uc774\uc2a4 \ub514\ud39c\ud130 \uce90\ub7ff \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\uc2a4\ud398\uc774\uc2a4 \ub514\ud39c\ud130 \uce90\ub7ff\uc740 \uc801\uacfc \uc7a5\uc560\ubb3c\uc744 \ud53c\ud558\uac70\ub098 \uacf5\uaca9\ud558\uba70 \uc810\uc218\ub97c \uc313\ub294 \uc288\ud305 \uc911\uc2ec \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/space-defender-carrot/index.html",
    "accent": "#22c55e"
  },
  {
    "id": "aim-speed-test",
    "korName": "\uc5d0\uc784 \uc2a4\ud53c\ub4dc \uc5f0\uc2b5",
    "engName": "Aim Speed Test",
    "maker": "\ubd80\uc548 \uc5f0\uc2b9",
    "genres": [
      "2D",
      "\uc544\ucf00\uc774\ub4dc",
      "1\uc778\uc6a9"
    ],
    "genre": "2D",
    "poster": "/games/aim-speed-test/poster.png",
    "posterAlt": "\uc5d0\uc784 \uc2a4\ud53c\ub4dc \uc5f0\uc2b5 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\uc5d0\uc784 \uc2a4\ud53c\ub4dc \uc5f0\uc2b5\uc740 \ud559\uc0dd\uc774 \uc9c1\uc811 \uc124\uacc4\ud558\uace0 \uad6c\ud604\ud55c HTML \uac8c\uc784\uc785\ub2c8\ub2e4. \ud654\uba74\uc758 \uaddc\uce59\uc744 \uc775\ud788\uba70 \ubaa9\ud45c \ub2ec\uc131\uc5d0 \ub3c4\uc804\ud574\ubcf4\uc138\uc694.",
    "controls": "\ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/aim-speed-test/index.html",
    "accent": "#46a3ff"
  },
  {
    "id": "unit-craft-science-code",
    "korName": "\uc720\ub2db \ud06c\ub798\ud504\ud2b8 \uacfc\ud559 \uae30\ud638",
    "engName": "Unit Craft Science Code",
    "maker": "\uc804\uc8fc \ub775\uc324",
    "genres": [
      "2D",
      "\ud37c\uc990"
    ],
    "genre": "2D",
    "poster": "/games/unit-craft-science-code/poster.png",
    "posterAlt": "\uc720\ub2db \ud06c\ub798\ud504\ud2b8 \uacfc\ud559 \uae30\ud638 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\uc720\ub2db \ud06c\ub798\ud504\ud2b8 \uacfc\ud559 \uae30\ud638\uc740 \uaddc\uce59\uc744 \ud30c\uc545\ud558\uace0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uba70 \ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ud37c\uc990 \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/unit-craft-science-code/index.html",
    "accent": "#8b5cf6"
  },
  {
    "id": "insungmap",
    "korName": "\uc778\uc131\ub9f5",
    "engName": "InsungMAP",
    "maker": "\uae40\uc81c \uaddc\ubbfc",
    "genres": [
      "\uc810\ud504",
      "2D",
      "3D",
      "\ud37c\uc990"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/insungmap/poster.jpg",
    "posterAlt": "\uc778\uc131\ub9f5 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\uc778\uc131\ub9f5\uc740 \uaddc\uce59\uc744 \ud30c\uc545\ud558\uace0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uba70 \ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ud37c\uc990 \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/insungmap/index.html",
    "accent": "#06b6d4"
  },
  {
    "id": "rasing-cho-rok",
    "korName": "\ucd08\ub85d\uc774 \ud0a4\uc6b0\uae30",
    "engName": "Rasing Cho-Rok",
    "maker": "\uae40\uc81c \uaddc\ubbfc",
    "genres": [
      "\uc2ac\ub798\uc2dc",
      "2D",
      "\ud37c\uc990",
      "\ub9ac\ub4ec"
    ],
    "genre": "\uc2ac\ub798\uc2dc",
    "poster": "/games/rasing-cho-rok/poster.jpg",
    "posterAlt": "\ucd08\ub85d\uc774 \ud0a4\uc6b0\uae30 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ucd08\ub85d\uc774 \ud0a4\uc6b0\uae30\uc740 \uaddc\uce59\uc744 \ud30c\uc545\ud558\uace0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uba70 \ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ud37c\uc990 \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/rasing-cho-rok/index.html",
    "accent": "#f5a524"
  },
  {
    "id": "cut-jump-180",
    "korName": "\ucef7\uc810\ud504180",
    "engName": "Cut Jump 180",
    "maker": "\uc804\uc8fc \uc720\ub098",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "\ud37c\uc990"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/cut-jump-180/poster.png",
    "posterAlt": "\ucef7\uc810\ud504180 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ucef7\uc810\ud504180\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/cut-jump-180/index.html",
    "accent": "#22c55e"
  },
  {
    "id": "titan-core",
    "korName": "\ud0c0\uc774\ud0c4 \ucf54\uc5b4",
    "engName": "Titan Core",
    "maker": "\uc804\uc8fc \uae40\uc81c",
    "genres": [
      "\uc810\ud504",
      "2D",
      "3D",
      "\uc288\ud305"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/titan-core/poster.jpg",
    "posterAlt": "\ud0c0\uc774\ud0c4 \ucf54\uc5b4 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ud0c0\uc774\ud0c4 \ucf54\uc5b4\uc740 \uc801\uacfc \uc7a5\uc560\ubb3c\uc744 \ud53c\ud558\uac70\ub098 \uacf5\uaca9\ud558\uba70 \uc810\uc218\ub97c \uc313\ub294 \uc288\ud305 \uc911\uc2ec \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/titan-core/index.html",
    "accent": "#ef4444"
  },
  {
    "id": "cozy_aquarium_studio",
    "korName": "\ud790\ub9c1 \uc544\ucfe0\uc544\ub9ac\uc6c0",
    "engName": "Cozy Aquarium Studio",
    "maker": "\ubd80\uc548 \uc774\uc7ac",
    "genres": [
      "2D",
      "\ud790\ub9c1",
      "\ub864\ud50c\ub808\uc789"
    ],
    "genre": "2D",
    "poster": "/games/cozy_aquarium_studio/poster.png",
    "posterAlt": "\ud790\ub9c1 \uc544\ucfe0\uc544\ub9ac\uc6c0 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ud790\ub9c1 \uc544\ucfe0\uc544\ub9ac\uc6c0\uc740 \ud3b8\uc548\ud55c \ubd84\uc704\uae30\uc5d0\uc11c \ud654\uba74\uc744 \uad00\ucc30\ud558\uace0 \uc870\uc791\ud558\uba70 \uc990\uae30\ub294 \ud790\ub9c1\ud615 HTML \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/cozy_aquarium_studio/index.html",
    "accent": "#f5a524"
  }
];
