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
    "id": "2-sec-heart",
    "korName": "2\ucd08\uc758 \uc628\uae30",
    "engName": "The Heart of 2sec",
    "maker": "\uae40\uc81c \uc8fc\ud76c",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "3D"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/2-sec-heart/poster.jpg",
    "posterAlt": "2\ucd08\uc758 \uc628\uae30 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "2\ucd08\uc758 \uc628\uae30\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/2-sec-heart/index.html",
    "accent": "#46a3ff"
  },
  {
    "id": "catch-10m",
    "korName": "10\ucd08 \ub9de\ucd94\uae30",
    "engName": "Catch 10 Second",
    "maker": "\uae40\uc81c \ubbfc\uc900",
    "genres": [
      "2D",
      "\ud37c\uc990",
      "\uc544\ucf00\uc774\ub4dc",
      "\ub864\ud50c\ub808\uc789"
    ],
    "genre": "2D",
    "poster": "/games/catch-10m/poster.jpg",
    "posterAlt": "10\ucd08 \ub9de\ucd94\uae30 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "10\ucd08 \ub9de\ucd94\uae30\uc740 \uaddc\uce59\uc744 \ud30c\uc545\ud558\uace0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uba70 \ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ud37c\uc990 \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/catch-10m/index.html",
    "accent": "#8b5cf6"
  },
  {
    "id": "kawaii-pet",
    "korName": "\uadc0\uc5ec\uc6b4 \ud3ab \ud0a4\uc6b0\uae30",
    "engName": "Cuty Pet House",
    "maker": "\uae40\uc81c \uc8fc\ud76c",
    "genres": [
      "\uc2ac\ub798\uc2dc",
      "2D",
      "\uc544\ucf00\uc774\ub4dc",
      "\ub864\ud50c\ub808\uc789"
    ],
    "genre": "\uc2ac\ub798\uc2dc",
    "poster": "/games/kawaii-pet/poster.jpg",
    "posterAlt": "\uadc0\uc5ec\uc6b4 \ud3ab \ud0a4\uc6b0\uae30 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\uadc0\uc5ec\uc6b4 \ud3ab \ud0a4\uc6b0\uae30\uc740 \ud559\uc0dd\uc774 \uc9c1\uc811 \uc124\uacc4\ud558\uace0 \uad6c\ud604\ud55c HTML \uac8c\uc784\uc785\ub2c8\ub2e4. \ud654\uba74\uc758 \uaddc\uce59\uc744 \uc775\ud788\uba70 \ubaa9\ud45c \ub2ec\uc131\uc5d0 \ub3c4\uc804\ud574\ubcf4\uc138\uc694.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/kawaii-pet/index.html",
    "accent": "#f5a524"
  },
  {
    "id": "ntower-tresure",
    "korName": "\ub0a8\uc0b0\ud0c0\uc6cc \ubcf4\ubb3c\ucc3e\uae30",
    "engName": "N-Tower Treasure Hunter",
    "maker": "\uae40\uc81c \ubbfc\uc900",
    "genres": [
      "2D",
      "\ud37c\uc990",
      "\uc2a4\ud3ec\uce20",
      "\ub9ac\ub4ec"
    ],
    "genre": "2D",
    "poster": "/games/ntower-tresure/poster.jpg",
    "posterAlt": "\ub0a8\uc0b0\ud0c0\uc6cc \ubcf4\ubb3c\ucc3e\uae30 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ub0a8\uc0b0\ud0c0\uc6cc \ubcf4\ubb3c\ucc3e\uae30\uc740 \uaddc\uce59\uc744 \ud30c\uc545\ud558\uace0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uba70 \ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ud37c\uc990 \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/ntower-tresure/index.html",
    "accent": "#8b5cf6"
  },
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
    "accent": "#06b6d4"
  },
  {
    "id": "dungdino-game",
    "korName": "\ub625\ub8e1 \uac8c\uc784",
    "engName": "The Game of DungRyong",
    "maker": "\uae40\uc81c \ub9b0\ud558",
    "genres": [
      "\uc810\ud504",
      "2D",
      "3D",
      "\uc288\ud305"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/dungdino-game/poster.jpg",
    "posterAlt": "\ub625\ub8e1 \uac8c\uc784 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ub625\ub8e1 \uac8c\uc784\uc740 \uc801\uacfc \uc7a5\uc560\ubb3c\uc744 \ud53c\ud558\uac70\ub098 \uacf5\uaca9\ud558\uba70 \uc810\uc218\ub97c \uc313\ub294 \uc288\ud305 \uc911\uc2ec \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/dungdino-game/index.html",
    "accent": "#22c55e"
  },
  {
    "id": "running-dino",
    "korName": "\ub7ec\ub2dd \ub514\ub178",
    "engName": "Running Dino",
    "maker": "\uae40\uc81c \uc11c\uc728",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "3D"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/running-dino/poster.png",
    "posterAlt": "\ub7ec\ub2dd \ub514\ub178 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ub7ec\ub2dd \ub514\ub178\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/running-dino/index.html",
    "accent": "#f5a524"
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
    "id": "malrang-game",
    "korName": "\ub9d0\ub791 \uacfc\uc77c",
    "engName": "Malrang Fruit",
    "maker": "\uae40\uc81c \ub9b0\ud558",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "\ud37c\uc990"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/malrang-game/poster.jpg",
    "posterAlt": "\ub9d0\ub791 \uacfc\uc77c \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ub9d0\ub791 \uacfc\uc77c\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/malrang-game/index.html",
    "accent": "#ef4444"
  },
  {
    "id": "malang-cat-rasing",
    "korName": "\ub9d0\ub791\ucea3 \ud0a4\uc6b0\uae30",
    "engName": "Malang Cat House",
    "maker": "\uae40\uc81c \ub2e4\uc740",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "3D"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/malang-cat-rasing/poster.png",
    "posterAlt": "\ub9d0\ub791\ucea3 \ud0a4\uc6b0\uae30 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ub9d0\ub791\ucea3 \ud0a4\uc6b0\uae30\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/malang-cat-rasing/index.html",
    "accent": "#22c55e"
  },
  {
    "id": "infinite-dino",
    "korName": "\ubb34\ud55c\uc758 \uacf5\ub8e1\uac8c\uc784",
    "engName": "Infinite Dino Game",
    "maker": "\uae40\uc81c \ub8e8\ud558",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "3D"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/infinite-dino/poster.jpg",
    "posterAlt": "\ubb34\ud55c\uc758 \uacf5\ub8e1\uac8c\uc784 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ubb34\ud55c\uc758 \uacf5\ub8e1\uac8c\uc784\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "WASD, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/infinite-dino/index.html",
    "accent": "#ef4444"
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
    "accent": "#f5a524"
  },
  {
    "id": "sky_bird_adventure",
    "korName": "\uc2a4\uce74\uc774 \ubc84\ub4dc \uc5b4\ub4dc\ubca4\ucc98",
    "engName": "Sky Bird Adventure",
    "maker": "\uae40\uc81c \uc11c\uc728",
    "genres": [
      "\uc810\ud504",
      "2D",
      "\uc288\ud305",
      "\ud37c\uc990"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/sky_bird_adventure/poster.png",
    "posterAlt": "\uc2a4\uce74\uc774 \ubc84\ub4dc \uc5b4\ub4dc\ubca4\ucc98 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\uc2a4\uce74\uc774 \ubc84\ub4dc \uc5b4\ub4dc\ubca4\ucc98\uc740 \uc801\uacfc \uc7a5\uc560\ubb3c\uc744 \ud53c\ud558\uac70\ub098 \uacf5\uaca9\ud558\uba70 \uc810\uc218\ub97c \uc313\ub294 \uc288\ud305 \uc911\uc2ec \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/sky_bird_adventure/index.html",
    "accent": "#22c55e"
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
    "accent": "#ef4444"
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
    "accent": "#f5a524"
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
    "accent": "#06b6d4"
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
    "id": "jump-runner",
    "korName": "\uc810\ud504 \ub7ec\ub108",
    "engName": "Jump Runner",
    "maker": "\uae40\uc81c \uc8fc\ud76c",
    "genres": [
      "\uc810\ud504",
      "\uc2ac\ub798\uc2dc",
      "2D",
      "3D"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/jump-runner/poster.jpg",
    "posterAlt": "\uc810\ud504 \ub7ec\ub108 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\uc810\ud504 \ub7ec\ub108\uc740 \uc810\ud504\uc640 \ub300\uc2dc, \uc808\ub2e8 \uc561\uc158\uc744 \ud65c\uc6a9\ud574 \uc7a5\uc560\ubb3c\uc744 \ub3cc\ud30c\ud558\uba70 \ub192\uc740 \uae30\ub85d\uc5d0 \ub3c4\uc804\ud558\ub294 \uc561\uc158 \uc544\ucf00\uc774\ub4dc \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/jump-runner/index.html",
    "accent": "#46a3ff"
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
    "accent": "#46a3ff"
  },
  {
    "id": "cat-tower-high-high",
    "korName": "\ucea3\ud0c0\uc6cc \ud558\uc774\ud558\uc774",
    "engName": "Cat Tower High High",
    "maker": "\uae40\uc81c \ub2e4\uc740",
    "genres": [
      "\uc810\ud504",
      "2D",
      "3D",
      "\uc288\ud305"
    ],
    "genre": "\uc810\ud504",
    "poster": "/games/cat-tower-high-high/poster.png",
    "posterAlt": "\ucea3\ud0c0\uc6cc \ud558\uc774\ud558\uc774 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ucea3\ud0c0\uc6cc \ud558\uc774\ud558\uc774\uc740 \uc801\uacfc \uc7a5\uc560\ubb3c\uc744 \ud53c\ud558\uac70\ub098 \uacf5\uaca9\ud558\uba70 \uc810\uc218\ub97c \uc313\ub294 \uc288\ud305 \uc911\uc2ec \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\ubc29\ud5a5\ud0a4, \uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/cat-tower-high-high/index.html",
    "accent": "#ef4444"
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
    "accent": "#46a3ff"
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
    "accent": "#8b5cf6"
  },
  {
    "id": "bird-that-loves-soil",
    "korName": "\ud759\uc744 \uc88b\uc544\ud558\ub294 \uc0c8",
    "engName": "The Bird that Loves Soil",
    "maker": "\uae40\uc81c \uc11c\uc728",
    "genres": [
      "\uc2ac\ub798\uc2dc",
      "3D",
      "\uaca9\ud22c",
      "\ud37c\uc990"
    ],
    "genre": "\uc2ac\ub798\uc2dc",
    "poster": "/games/bird-that-loves-soil/poster.png",
    "posterAlt": "\ud759\uc744 \uc88b\uc544\ud558\ub294 \uc0c8 \uac8c\uc784 \ud3ec\uc2a4\ud130",
    "description": "\ud759\uc744 \uc88b\uc544\ud558\ub294 \uc0c8\uc740 \uaddc\uce59\uc744 \ud30c\uc545\ud558\uace0 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uba70 \ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ud37c\uc990 \uac8c\uc784\uc785\ub2c8\ub2e4.",
    "controls": "\uc2a4\ud398\uc774\uc2a4\ubc14, \ub9c8\uc6b0\uc2a4/\ud130\uce58",
    "gameUrl": "/games/bird-that-loves-soil/index.html",
    "accent": "#22c55e"
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
    "accent": "#06b6d4"
  }
];
