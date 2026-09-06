"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const POINTS = {
  quarter: 1,
  half: 2,
  whole: 4,
};

const NOTE_META = {
  quarter: { emoji: "♩", label: "Kwartnoot", color: "#16c760" },
  half: { emoji: "𝅗𝅥", label: "Halve noot", color: "#0693e3" },
  whole: { emoji: "𝅝", label: "Hele noot", color: "#7b61ff" },
  rest: { emoji: "𝄽", label: "Rust", color: "#cf2e2e" },
};

const CATCH_ZONE_Y_MIN = 92;
const CATCH_ZONE_Y_MAX = 99.2;
const CATCH_ZONE_X_DISTANCE = 5.8;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const createItem = (id, lane, y = -12, speedBoost = 0, restChance = 0.14) => {
  const random = Math.random();
  const safeRestChance = clamp(restChance, 0.1, 0.36);
  const wholeChance = 0.14;
  const halfChance = 0.27;
  const quarterChance = Math.max(0.05, 1 - safeRestChance - wholeChance - halfChance);

  let type = "quarter";
  if (random > quarterChance && random <= quarterChance + halfChance) type = "half";
  if (random > quarterChance + halfChance && random <= quarterChance + halfChance + wholeChance) type = "whole";
  if (random > quarterChance + halfChance + wholeChance) type = "rest";

  return {
    id,
    type,
    x: 7 + lane * 12.2,
    y,
    speed: 1.2 + Math.random() * 1.9 + speedBoost,
  };
};

const formatDate = (value) => {
  try {
    return new Date(value).toLocaleString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
};

export default function NotenvangerPage() {
  const [gameStatus, setGameStatus] = useState("idle");
  const [score, setScore] = useState(0);
  const [items, setItems] = useState([]);
  const [playerX, setPlayerX] = useState(50);
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loadingBoard, setLoadingBoard] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionUser, setSessionUser] = useState("");

  const gameRef = useRef({
    items: [],
    score: 0,
    playerX: 50,
    nextId: 1,
    startTime: 0,
    lastSpawn: 0,
    lastBurst: 0,
    burstInterval: 1000,
    timer: null,
  });

  const isRunning = gameStatus === "running";
  const isGameOver = gameStatus === "gameover";

  const fetchLeaderboard = useCallback(async () => {
    setLoadingBoard(true);

    try {
      const response = await fetch("/api/note-catcher-scores", { cache: "no-store" });
      if (!response.ok) throw new Error("Kon scorebord niet laden");
      const payload = await response.json();
      setLeaderboard(Array.isArray(payload.leaderboard) ? payload.leaderboard : []);
      setErrorMessage("");
    } catch {
      setErrorMessage("Kon scorebord niet ophalen. Probeer het later opnieuw.");
    } finally {
      setLoadingBoard(false);
    }
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      fetchLeaderboard();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [fetchLeaderboard]);

  useEffect(() => {
    let active = true;

    const refreshLoginState = async () => {
      try {
        const response = await fetch("/api/session", { cache: "no-store" });
        const payload = await response.json();
        if (!active) return;

        if (!payload?.authenticated || !payload?.user) {
          setIsLoggedIn(false);
          setSessionUser("");
          return;
        }

        setIsLoggedIn(true);
        setSessionUser(payload.user.username || "");
      } catch {
        if (!active) return;
        setIsLoggedIn(false);
        setSessionUser("");
      }
    };

    refreshLoginState();
    window.addEventListener("focus", refreshLoginState);

    return () => {
      active = false;
      window.removeEventListener("focus", refreshLoginState);
    };
  }, []);

  const clearGameTimer = () => {
    if (gameRef.current.timer) {
      window.clearInterval(gameRef.current.timer);
      gameRef.current.timer = null;
    }
  };

  useEffect(() => clearGameTimer, []);

  const endGame = useCallback(() => {
    clearGameTimer();
    setGameStatus("gameover");
    setItems([...gameRef.current.items]);
  }, []);

  const startGame = useCallback(() => {
    if (!isLoggedIn) {
      setErrorMessage("Log eerst in om de notenvanger te spelen.");
      return;
    }

    clearGameTimer();

    gameRef.current.items = [];
    gameRef.current.score = 0;
    gameRef.current.playerX = 50;
    gameRef.current.startTime = performance.now();
    gameRef.current.lastSpawn = performance.now();
    gameRef.current.lastBurst = performance.now();
    gameRef.current.burstInterval = 760 + Math.random() * 500;

    setItems([]);
    setScore(0);
    setPlayerX(50);
    setSubmitted(false);
    setGameStatus("running");
    setErrorMessage("");

    gameRef.current.timer = window.setInterval(() => {
      const state = gameRef.current;
      const now = performance.now();
      const elapsedSeconds = Math.max(0, (now - state.startTime) / 1000);
      const dynamicRestChance = Math.min(0.14 + elapsedSeconds * 0.002, 0.32);

      if (now - state.lastSpawn >= 145) {
        const spawns = Math.random() < 0.35 ? 2 : 1;
        for (let index = 0; index < spawns; index += 1) {
          const lane = Math.floor(Math.random() * 8);
          state.items.push(createItem(state.nextId, lane, -12 - Math.random() * 16, 0, dynamicRestChance));
          state.nextId += 1;
        }
        state.lastSpawn = now;
      }

      if (now - state.lastBurst >= state.burstInterval) {
        const burstCount = 3 + Math.floor(Math.random() * 3);
        const baseLane = Math.floor(Math.random() * 6);

        for (let index = 0; index < burstCount; index += 1) {
          const lane = clamp(baseLane + index, 0, 7);
          state.items.push(createItem(state.nextId, lane, -18 - index * 6, 0.35, dynamicRestChance));
          state.nextId += 1;
        }

        state.lastBurst = now;
        state.burstInterval = 620 + Math.random() * 700;
      }

      let scoreChanged = false;
      let shouldEnd = false;
      const nextItems = [];

      for (const item of state.items) {
        const nextY = item.y + item.speed;
        const inCatchZone = nextY >= CATCH_ZONE_Y_MIN && nextY <= CATCH_ZONE_Y_MAX;
        const catchesItem = Math.abs(item.x - state.playerX) <= CATCH_ZONE_X_DISTANCE;

        if (inCatchZone && catchesItem) {
          if (item.type === "rest") {
            shouldEnd = true;
            break;
          }

          state.score += POINTS[item.type];
          scoreChanged = true;
          continue;
        }

        if (nextY <= 110) {
          nextItems.push({ ...item, y: nextY });
        }
      }

      state.items = nextItems;

      if (scoreChanged) {
        setScore(state.score);
      }

      setItems([...state.items]);

      if (shouldEnd) {
        endGame();
      }
    }, 42);
  }, [endGame, isLoggedIn]);

  const movePlayerTo = useCallback((value) => {
    if (!isRunning) return;

    const nextX = clamp(value, 8, 92);
    gameRef.current.playerX = nextX;
    setPlayerX(nextX);
  }, [isRunning]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isRunning) return;

      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        event.preventDefault();
        movePlayerTo(gameRef.current.playerX - 5.5);
      }

      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        event.preventDefault();
        movePlayerTo(gameRef.current.playerX + 5.5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRunning, movePlayerTo]);

  const onTouchMoveField = (event) => {
    if (!isRunning) return;

    const touch = event.touches?.[0];
    if (!touch) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const percent = ((touch.clientX - bounds.left) / bounds.width) * 100;
    movePlayerTo(percent);
  };

  const onMouseMoveField = (event) => {
    if (!isRunning || event.buttons !== 1) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const percent = ((event.clientX - bounds.left) / bounds.width) * 100;
    movePlayerTo(percent);
  };

  const submitScore = async (event) => {
    event.preventDefault();

    if (!isGameOver || submitted) return;

    if (!sessionUser) {
      setErrorMessage("Log eerst in om een score op te slaan.");
      return;
    }

    const accountId = `user:${sessionUser.trim().toLowerCase()}`;

    try {
      const response = await fetch("/api/note-catcher-scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountId,
          name: playerName,
          score,
        }),
      });

      if (!response.ok) {
        throw new Error("Kon score niet opslaan");
      }

      const payload = await response.json();
      setLeaderboard(Array.isArray(payload.leaderboard) ? payload.leaderboard : []);
      setSubmitted(true);
      setErrorMessage("");
    } catch {
      setErrorMessage("Opslaan lukte niet. Probeer het nog een keer.");
    }
  };

  const scoreLegend = useMemo(
    () => [
      { symbol: "♩", label: "Kwartnoot", points: 1, color: "var(--green)" },
      { symbol: "𝅗𝅥", label: "Halve noot", points: 2, color: "var(--primary)" },
      { symbol: "𝅝", label: "Hele noot", points: 4, color: "var(--purple)" },
      { symbol: "𝄽", label: "Rust", points: 0, color: "var(--danger)", extra: "Game over" },
    ],
    []
  );

  const staticSurfaceStyle = useMemo(() => ({ transform: "none", transition: "none" }), []);
  const staticButtonStyle = useMemo(() => ({ transform: "none" }), []);

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <section className="mb-5 text-center">
          <div className="instrument-header">🎮 Notenvanger</div>
          <h1 className="title">Vang de noten</h1>
          <p className="subtitle mx-auto mt-2 max-w-3xl">
            Links/rechts of A/D bewegen. Kwart = 1, half = 2, heel = 4. Rust = af.
          </p>
        </section>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="card" style={staticSurfaceStyle}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold" style={{ color: "var(--pink)" }}>Speelveld</h2>
              <div className="badge" style={{ background: "var(--yellow)", color: "#523800" }}>Score: {score}</div>
            </div>

            <div className="mb-3 grid gap-2 grid-cols-2 md:grid-cols-4">
              {scoreLegend.map((item) => (
                <article key={item.label} className="rounded-xl border px-3 py-2" style={{ borderColor: "var(--border)", background: "#fff" }}>
                  <p className="font-bold" style={{ color: item.color }}>{item.symbol} {item.label}</p>
                  <p className="text-sm" style={{ color: "#4b5563" }}>{item.points > 0 ? `${item.points} punt${item.points > 1 ? "en" : ""}` : item.extra}</p>
                </article>
              ))}
            </div>

            <div
              className="relative h-[430px] overflow-hidden rounded-2xl border-2"
              style={{ borderColor: "var(--border)", background: "linear-gradient(180deg, #fff8e7, #eef8ff 60%, #eefcf8)" }}
              onTouchMove={onTouchMoveField}
              onMouseMove={onMouseMoveField}
            >
              <div className="pointer-events-none absolute left-0 top-0 h-full w-full" style={{ background: "radial-gradient(circle at 20% 15%, rgba(6,147,227,0.12), transparent 35%), radial-gradient(circle at 80% 20%, rgba(247,141,167,0.14), transparent 38%)" }}></div>

              {items.map((item) => {
                const meta = NOTE_META[item.type];
                return (
                  <div
                    key={item.id}
                    className="absolute select-none text-4xl"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      transform: "translate(-50%, -50%)",
                      color: meta.color,
                      textShadow: "0 4px 10px rgba(36,50,74,0.18)",
                    }}
                  >
                    {meta.emoji}
                  </div>
                );
              })}

              <div
                className="absolute bottom-2 h-6 w-20 -translate-x-1/2 rounded-full border-2"
                style={{
                  left: `${playerX}%`,
                  borderColor: "rgba(255,255,255,0.95)",
                  background: "linear-gradient(135deg, var(--primary), var(--purple))",
                  boxShadow: "0 8px 14px rgba(36,50,74,0.2)",
                }}
              ></div>

              {!isRunning && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/75 backdrop-blur-sm p-6 text-center">
                  {!isLoggedIn ? (
                    <>
                      <h3 className="text-2xl font-black" style={{ color: "var(--primary-dark)" }}>
                        Eerst inloggen
                      </h3>
                      <p className="subtitle max-w-xl">
                        Je moet ingelogd zijn om Notenvanger te kunnen spelen.
                      </p>
                      <Link href="/login" className="btn" style={staticButtonStyle}>Ga naar inloggen</Link>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-black" style={{ color: "var(--primary-dark)" }}>
                        {isGameOver ? "Game over" : "Klaar voor de start?"}
                      </h3>
                      <p className="subtitle max-w-xl">
                        {isGameOver
                          ? "Je raakte een rust. Vul je naam in en sla op."
                          : "Start en vang zoveel mogelijk noten."}
                      </p>
                      <button type="button" className="btn" style={staticButtonStyle} onClick={startGame}>Start spel</button>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" className="btn" style={staticButtonStyle} onClick={() => movePlayerTo(playerX - 9)} disabled={!isRunning || !isLoggedIn}>⬅ Links</button>
              <button type="button" className="btn" style={staticButtonStyle} onClick={() => movePlayerTo(playerX + 9)} disabled={!isRunning || !isLoggedIn}>Rechts ➡</button>
            </div>

            {isLoggedIn && isGameOver && (
              <form className="mt-4 rounded-xl border p-3" style={{ borderColor: "var(--border)", background: "#fff" }} onSubmit={submitScore}>
                <p className="font-bold mb-2">Jouw score: {score}</p>
                <label htmlFor="player-name" className="subtitle block mb-2">Naam voor leaderboard</label>
                <div className="flex flex-wrap gap-2">
                  <input
                    id="player-name"
                    type="text"
                    className="input max-w-sm"
                    maxLength={24}
                    value={playerName}
                    onChange={(event) => setPlayerName(event.target.value)}
                    placeholder="Jouw naam"
                    required
                  />
                  <button type="submit" className="btn" style={staticButtonStyle} disabled={submitted}>{submitted ? "Opgeslagen" : "Score opslaan"}</button>
                </div>
              </form>
            )}
          </section>

          <aside className="card h-fit lg:sticky lg:top-24" style={staticSurfaceStyle}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--green)" }}>Leaderboard top 5</h2>
            {loadingBoard ? (
              <p className="subtitle">Laden...</p>
            ) : leaderboard.length === 0 ? (
              <p className="subtitle">Nog geen scores.</p>
            ) : (
              <div className="grid gap-2">
                {leaderboard.map((entry, index) => (
                  <article key={`${entry.name}-${entry.score}-${entry.createdAt}-${index}`} className="rounded-xl border p-3" style={{ borderColor: "var(--border)", background: "#fff" }}>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold">#{index + 1} {entry.name}</p>
                      <p className="badge" style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}>{entry.score}</p>
                    </div>
                    <p className="text-sm mt-1" style={{ color: "#6b7280" }}>{formatDate(entry.createdAt)}</p>
                  </article>
                ))}
              </div>
            )}

            {errorMessage && (
              <p className="error-box mt-3">{errorMessage}</p>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
