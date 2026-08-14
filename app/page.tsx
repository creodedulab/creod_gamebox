"use client";

import type { CSSProperties, FormEvent, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { games, genreOptions, type Game } from "./games-data";

type PageState =
  | { page: "gate" }
  | { page: "list" }
  | { page: "detail"; gameId: string }
  | { page: "play"; gameId: string };

type HistoryState = PageState & { creodGamebox: true };

const STUDENT_PASSWORD = "띵쌤";
const ADMIN_PASSWORD = "creod1029";
const INSTAGRAM_URL = "https://www.instagram.com/tting_ssam/";
const HOMEPAGE_URL = "https://creodedulab.github.io/";
const COPYRIGHT_WARNING =
  "본 게임은 크레오디 수업을 통해 교육생분들께서 만든 소중한 결과물입니다. 무단 복제, 배포, 코드 사용을 엄히 금지합니다.";

export default function Home() {
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const [adminError, setAdminError] = useState("");
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageState>({ page: "gate" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("전체");

  const filteredGames = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return games.filter((game) => {
      const matchesGenre = selectedGenre === "전체" || game.genres.includes(selectedGenre);
      const searchableText = [
        game.korName,
        game.engName,
        game.maker,
        game.description,
        game.controls,
        ...game.genres,
      ]
        .join(" ")
        .toLowerCase();
      const matchesKeyword = !keyword || searchableText.includes(keyword);

      return matchesGenre && matchesKeyword;
    });
  }, [searchTerm, selectedGenre]);

  const currentGame =
    currentPage.page === "detail" || currentPage.page === "play"
      ? games.find((game) => game.id === currentPage.gameId) ?? null
      : null;

  useEffect(() => {
    const initialState: HistoryState = { creodGamebox: true, page: "gate" };
    window.history.replaceState(initialState, "", "#gate");

    function handlePopState(event: PopStateEvent) {
      const state = event.state as HistoryState | null;

      if (!state?.creodGamebox) {
        setCurrentPage({ page: "gate" });
        return;
      }

      setCurrentPage(state);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage.page === "gate" || isAdminMode) return;

    function blockContextMenu(event: MouseEvent) {
      event.preventDefault();
    }

    document.addEventListener("contextmenu", blockContextMenu);
    return () => document.removeEventListener("contextmenu", blockContextMenu);
  }, [currentPage.page, isAdminMode]);

  function pushPage(nextPage: PageState) {
    const hash =
      nextPage.page === "gate"
        ? "#gate"
        : nextPage.page === "list"
          ? "#games"
          : nextPage.page === "detail"
            ? `#game-${nextPage.gameId}`
            : `#play-${nextPage.gameId}`;

    window.history.pushState({ creodGamebox: true, ...nextPage }, "", hash);
    setCurrentPage(nextPage);
  }

  function handleEnter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password === STUDENT_PASSWORD) {
      setError("");
      setIsAdminMode(false);
      pushPage({ page: "list" });
      return;
    }

    setError("비밀번호를 다시 확인해주세요.");
  }

  function handleAdminEnter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (adminPassword === ADMIN_PASSWORD) {
      setAdminError("");
      setIsAdminMode(true);
      pushPage({ page: "list" });
      return;
    }

    setAdminError("관리자 비밀번호를 다시 확인해주세요.");
  }

  if (currentPage.page === "gate") {
    return (
      <main className="gate-page">
        <section className="gate-panel" aria-labelledby="gate-title">
          <p className="gate-kicker">CREOD GAMEBOX</p>
          <h1 id="gate-title">크레오디 게임박스</h1>
          <p className="gate-copy">
            수업에서 만든 HTML 게임을 한곳에 모아 언제든 실행할 수 있는 공간입니다.
          </p>
          <form className="gate-form" onSubmit={handleEnter}>
            <label htmlFor="password">입장 비밀번호</label>
            <div className="password-row">
              <input
                id="password"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="off"
                placeholder="비밀번호 입력"
              />
              <button type="submit">입장</button>
            </div>
            {error ? <p className="form-error">{error}</p> : null}
          </form>
          <div className="admin-login-block">
            <button
              className="secondary-action"
              type="button"
              onClick={() => setIsAdminLoginOpen((value) => !value)}
            >
              관리자모드
            </button>
            {isAdminLoginOpen ? (
              <form className="gate-form admin-gate-form" onSubmit={handleAdminEnter}>
                <label htmlFor="admin-password">관리자 비밀번호</label>
                <div className="password-row">
                  <input
                    id="admin-password"
                    type="password"
                    value={adminPassword}
                    onChange={(event) => setAdminPassword(event.target.value)}
                    autoComplete="current-password"
                    placeholder="관리자 비밀번호 입력"
                  />
                  <button type="submit">입장</button>
                </div>
                {adminError ? <p className="form-error">{adminError}</p> : null}
              </form>
            ) : null}
          </div>
          <div className="gate-contact">
            <span>비밀번호 문의는 띵쌤 인스타그램 팔로우 후 DM으로 문의해주세요</span>
            <IconLink href={INSTAGRAM_URL} label="띵쌤 인스타그램 열기" icon="instagram" />
          </div>
          <p className="gate-warning">{COPYRIGHT_WARNING}</p>
        </section>
      </main>
    );
  }

  if (currentPage.page === "detail" && currentGame) {
    return (
      <AppFrame isAdminMode={isAdminMode} onHome={() => pushPage({ page: "list" })}>
        <GameDetail
          game={currentGame}
          isAdminMode={isAdminMode}
          onBack={() => window.history.back()}
          onStart={() => pushPage({ page: "play", gameId: currentGame.id })}
        />
      </AppFrame>
    );
  }

  if (currentPage.page === "play" && currentGame) {
    return (
      <AppFrame isAdminMode={isAdminMode} onHome={() => pushPage({ page: "list" })}>
        <GamePlayer game={currentGame} isAdminMode={isAdminMode} onBack={() => window.history.back()} />
      </AppFrame>
    );
  }

  return (
    <AppFrame isAdminMode={isAdminMode} onHome={() => pushPage({ page: "list" })}>
      <section className="search-panel" aria-label="게임 검색">
        <div className="search-field">
          <label htmlFor="game-search">게임 또는 장르 검색</label>
          <input
            id="game-search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="게임 이름, 제작자, #장르 검색"
          />
        </div>
        <div className="search-field genre-select">
          <label htmlFor="genre-filter">장르 선택</label>
          <select
            id="genre-filter"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
          >
            <option value="전체">전체</option>
            {genreOptions.map((genre) => (
              <option key={genre} value={genre}>
                #{genre}
              </option>
            ))}
          </select>
        </div>
        <span className="result-count">{filteredGames.length} games</span>
      </section>

      {filteredGames.length ? (
        <section className="game-grid" aria-label="등록된 게임 목록">
          {filteredGames.map((game) => (
            <button
              className="game-card"
              key={game.id}
              onClick={() => pushPage({ page: "detail", gameId: game.id })}
              type="button"
            >
              <Poster game={game} isAdminMode={isAdminMode} />
              <GameCardText game={game} />
            </button>
          ))}
        </section>
      ) : (
        <p className="empty-message">조건에 맞는 게임이 없습니다.</p>
      )}
    </AppFrame>
  );
}

function AppFrame({
  children,
  isAdminMode,
  onHome,
}: {
  children: ReactNode;
  isAdminMode: boolean;
  onHome: () => void;
}) {
  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand-title" type="button" onClick={onHome}>
          CREO.D GAMEBOX
        </button>
        {isAdminMode ? <span className="admin-mode-badge">관리자모드</span> : null}
      </header>
      {children}
      <SiteFooter />
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{COPYRIGHT_WARNING}</p>
      <div className="footer-meta">
        <span>Copyright 2026 크레오디교육연구소</span>
        <IconLink href={HOMEPAGE_URL} label="크레오디교육연구소 홈페이지 열기" icon="home" />
        <IconLink href={INSTAGRAM_URL} label="띵쌤 인스타그램 열기" icon="instagram" />
      </div>
    </footer>
  );
}

function IconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "home" | "instagram";
}) {
  return (
    <a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <span className={`icon-symbol ${icon}`} aria-hidden="true" />
    </a>
  );
}

function Poster({ game, isAdminMode }: { game: Game; isAdminMode: boolean }) {
  if (game.poster) {
    return (
      <img
        className="poster-image"
        src={game.poster}
        alt={game.posterAlt}
        draggable={isAdminMode}
        onDragStart={(event) => {
          if (!isAdminMode) event.preventDefault();
        }}
      />
    );
  }

  return (
    <div
      className="poster-placeholder"
      style={{ "--accent": game.accent } as CSSProperties}
      aria-label={game.posterAlt}
    >
      <span>{game.genres[0]}</span>
      <strong>{game.korName}</strong>
      <small>{game.maker}</small>
    </div>
  );
}

function GameCardText({ game }: { game: Game }) {
  return (
    <div className="game-card-text">
      <strong>{game.korName}</strong>
      <span>{game.engName}</span>
      <small>{game.maker}</small>
      <div className="tag-list" aria-label={`${game.korName} 장르`}>
        {game.genres.map((genre) => (
          <span key={genre}>#{genre}</span>
        ))}
      </div>
    </div>
  );
}

function GameDetail({
  game,
  isAdminMode,
  onBack,
  onStart,
}: {
  game: Game;
  isAdminMode: boolean;
  onBack: () => void;
  onStart: () => void;
}) {
  return (
    <section className="detail-page" aria-labelledby="detail-title">
      <button className="secondary-action" type="button" onClick={onBack}>
        목록으로
      </button>
      <div className="detail-card">
        <div className="detail-poster">
          <Poster game={game} isAdminMode={isAdminMode} />
        </div>
        <div className="detail-content">
          <div className="tag-list detail-tags">
            {game.genres.map((genre) => (
              <span key={genre}>#{genre}</span>
            ))}
          </div>
          <h2 id="detail-title">{game.korName}</h2>
          <p className="eng-title">{game.engName}</p>
          <p>{game.description}</p>
          <dl>
            <div>
              <dt>제작</dt>
              <dd>{game.maker}</dd>
            </div>
            <div>
              <dt>조작</dt>
              <dd>{game.controls}</dd>
            </div>
          </dl>
          {isAdminMode ? <AdminDownloadActions game={game} /> : null}
          <button className="primary-action" type="button" onClick={onStart}>
            게임 시작
          </button>
        </div>
      </div>
    </section>
  );
}

function GamePlayer({
  game,
  isAdminMode,
  onBack,
}: {
  game: Game;
  isAdminMode: boolean;
  onBack: () => void;
}) {
  const playerPanelRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [frameViewport, setFrameViewport] = useState({
    scale: 1,
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === playerPanelRef.current);
      window.setTimeout(fitGameViewport, 0);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    function handleResize() {
      fitGameViewport();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const iframeWindow = iframeRef.current?.contentWindow;
    iframeWindow?.dispatchEvent(new Event("resize"));
  }, [frameViewport]);

  function blockIframeContextMenu() {
    if (isAdminMode) return;

    const iframeDocument = iframeRef.current?.contentDocument;
    iframeDocument?.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }

  function resetIframeViewportScale() {
    setFrameViewport({ scale: 1, width: "100%", height: "100%" });
  }

  function fitGameViewport() {
    const iframe = iframeRef.current;
    const frame = iframe?.parentElement;
    if (!iframe || !frame) return;

    if (document.fullscreenElement === playerPanelRef.current) {
      resetIframeViewportScale();
      return;
    }

    window.requestAnimationFrame(() => {
      const frameWidth = frame.clientWidth;
      const frameHeight = frame.clientHeight;

      if (!frameWidth || !frameHeight) {
        resetIframeViewportScale();
        return;
      }

      const baseVirtualHeight = game.id === "malrang-game" ? 900 : 1080;
      const virtualHeight = Math.max(baseVirtualHeight, frameHeight);
      const scale = Math.min(1, frameHeight / virtualHeight);
      const virtualWidth = Math.ceil(frameWidth / scale);

      setFrameViewport({
        scale,
        width: `${virtualWidth}px`,
        height: `${virtualHeight}px`,
      });
    });
  }

  function scheduleFrameFitChecks() {
    [150, 350, 700, 1200, 2000, 3200].forEach((delay) => {
      window.setTimeout(fitGameViewport, delay);
    });
  }

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await playerPanelRef.current?.requestFullscreen();
  }

  return (
    <section className="player-page" aria-labelledby="player-title">
      <div className="player-panel" ref={playerPanelRef}>
        <div className="player-toolbar">
          <div>
            <p className="eyebrow">NOW PLAYING</p>
            <h2 id="player-title">{game.korName}</h2>
          </div>
          <div className="player-actions">
            {isAdminMode ? <DownloadButton href={game.gameUrl} filename={`${game.id}.html`} label="HTML 다운로드" /> : null}
            <button type="button" onClick={toggleFullscreen} aria-pressed={isFullscreen}>
              {isFullscreen ? "최소화" : "전체화면"}
            </button>
            <button type="button" onClick={onBack}>
              설명으로
            </button>
          </div>
        </div>
        <div className="player-frame">
          <iframe
            ref={iframeRef}
            title={`${game.korName} 실행 화면`}
            src={game.gameUrl}
            allowFullScreen
            style={
              {
                "--frame-scale": frameViewport.scale,
                "--frame-width": frameViewport.width,
                "--frame-height": frameViewport.height,
              } as CSSProperties
            }
            onLoad={() => {
              blockIframeContextMenu();
              resetIframeViewportScale();
              scheduleFrameFitChecks();
            }}
          />
        </div>
      </div>
    </section>
  );
}

function AdminDownloadActions({ game }: { game: Game }) {
  return (
    <div className="admin-download-actions" aria-label={`${game.korName} 관리자 다운로드`}>
      {game.poster ? (
        <DownloadButton href={game.poster} filename={`${game.id}-poster`} label="포스터 다운로드" />
      ) : null}
      <DownloadButton href={game.gameUrl} filename={`${game.id}.html`} label="HTML 다운로드" />
    </div>
  );
}

function DownloadButton({
  href,
  filename,
  label,
}: {
  href: string;
  filename: string;
  label: string;
}) {
  return (
    <a className="download-action" href={href} download={filename}>
      {label}
    </a>
  );
}
