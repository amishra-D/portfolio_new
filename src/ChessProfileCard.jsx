import React, { useEffect, useMemo, useState } from "react";
import {
  FaChessBoard,
  FaChartLine,
  FaCrown,
  FaChess,
  FaCalendar,
  FaChessKing,
  FaChessQueen,
  FaChessBishop,
  FaTrophy,
} from "react-icons/fa";
import { getChessProfile } from "./ChessAPI";
import ChessLoader from "./Components/ChessLoader";
import Bbutton from "./Components/Bbutton";

function StatBox({ icon, label, value }) {
  return (
    <div className="p-3 rounded-lg bg-opp/30 border border-default text-center">
      <div className="flex items-center justify-center gap-2 mb-2 text-primary">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-xl font-bold text-primary">{value}</p>
    </div>
  );
}

function PlatformLogo({ platform }) {
  if (platform === "chess.com") {
    return (
      <svg
        viewBox="0 0 50 50"
        className="w-8 h-8"
        fill="currentColor"
      >
        <path d="M7 7h36v36H7z" fill="#769656" />
        <path d="M7 7h18v18H7zM25 25h18v18H25z" fill="#eeeed2" />
        <circle cx="25" cy="25" r="12" fill="#312e2b" />
        <circle cx="25" cy="25" r="8" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 50 50"
      className="w-8 h-8"
      fill="currentColor"
    >
      <path
        d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.768 32.177.6 43.16c2.147-3.206 5.093-6.36 8.214-9.303 1.68-1.582 5.09-5.09 8.28-9.12 1.528-1.93 2.955-3.93 4.28-6.005.554-.868 1.084-1.74 1.596-2.62.245-.422.488-.842.73-1.264.065-.113.13-.227.192-.34.027-.05.054-.1.08-.15.028-.05.055-.1.082-.152l.18-.35c.295-.58.614-1.16.932-1.74.637-1.16 1.297-2.318 1.996-3.464.348-.573.708-1.146 1.08-1.714.186-.284.376-.568.568-.85.096-.14.192-.282.29-.423.1-.14.198-.28.298-.418.398-.566.82-1.122 1.252-1.67.432-.547.88-1.088 1.342-1.617.462-.53.94-1.05 1.434-1.55.494-.502 1.003-.99 1.53-1.46.528-.47 1.072-.92 1.63-1.352.558-.432 1.13-.846 1.716-1.242.586-.396 1.186-.765 1.798-1.106.612-.34 1.24-.653 1.872-.932.633-.28 1.283-.53 1.94-.736.66-.207 1.322-.38 1.996-.5.674-.12 1.354-.193 2.04-.21.687-.017 1.376.017 2.076.15 1.4.266 2.85.858 4.254 1.833 2.814 1.952 4.904 4.85 5.677 7.62.39 1.385.563 2.772.51 4.14-.055 1.37-.325 2.71-.76 4.017-.87 2.616-2.43 5.11-4.52 7.43-1.048 1.16-2.243 2.28-3.59 3.364-.674.542-1.39 1.073-2.148 1.584-.38.256-.767.51-1.163.76-.396.25-.8.496-1.213.736-.826.49-1.697.943-2.61 1.36-.456.208-.924.404-1.4.59-.477.184-.963.36-1.458.52-.99.328-2.016.6-3.065.824-1.05.224-2.12.39-3.208.52-1.09.13-2.194.23-3.303.27-1.108.04-2.22.028-3.33-.04-1.108-.07-2.214-.18-3.31-.35-1.098-.17-2.19-.38-3.267-.65-1.08-.27-2.145-.59-3.193-.96-1.048-.37-2.074-.79-3.08-1.27-2.01-0.95-3.935-2.11-5.756-3.46-0.91-.675-1.79-1.406-2.632-2.19-.84-.785-1.64-1.62-2.394-2.506-.755-.885-1.462-1.817-2.116-2.79-.654-.973-1.25-1.99-1.785-3.045-.535-1.055-.998-2.148-1.388-3.27-.39-1.122-.704-2.274-.94-3.45-.236-1.175-.39-2.37-.465-3.577-.075-1.207-.07-2.42.03-3.632.1-1.21.29-2.418.57-3.613.28-1.196.65-2.38 1.11-3.54.46-1.16 1.01-2.295 1.65-3.39.64-1.096 1.37-2.15 2.18-3.16.81-1.01 1.7-1.97 2.66-2.88.96-.908 1.99-1.76 3.08-2.55 1.09-.79 2.24-1.51 3.44-2.16 1.2-.65 2.45-1.23 3.74-1.72 1.29-.49 2.62-.89 3.98-1.2 1.36-.31 2.75-.54 4.16-.67 1.41-.13 2.83-.15 4.25-.05z"
        fill="#000"
      />
    </svg>
  );
}

function PlatformSection({ platform, ratings, isLoading }) {
  return (
    <div className="bg-opp/20 rounded-xl p-4 border border-default">
      <div className="flex items-center gap-3 mb-4">
        <PlatformLogo platform={platform} />
        <h3 className="text-lg font-bold text-primary capitalize">
          {platform === "chess.com" ? "Chess.com" : "Lichess"}
        </h3>
      </div>

      {isLoading ? (
        <div className="text-center text-sm text-secondary py-4">
          Loading...
        </div>
      ) : ratings && ratings.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
          {ratings.map((r) => (
            <div
              key={r.label}
              className="p-3 rounded-lg bg-surface border border-default text-center hover:bg-opp/40 transition-colors"
            >
              <div className="flex justify-center mb-2 text-primary">
                {r.icon}
              </div>
              <p className="text-xs text-secondary mb-1">{r.label}</p>
              <p className="font-bold text-primary text-lg">
                {r.current || "—"}
              </p>
              {r.games > 0 && (
                <p className="text-xs text-secondary mt-1">
                  {r.games} {r.games === 1 ? "game" : "games"}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-sm text-secondary py-4">
          No {platform === "chess.com" ? "Chess.com" : "Lichess"} account found
        </div>
      )}
    </div>
  );
}

export default function ChessProfileCard({ username }) {
  const [data, setData] = useState(null);
  const [lichess, setLichess] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lichessLoading, setLichessLoading] = useState(true);

  const stats = data?.stats || {};
  const rapid = stats.chess_rapid || {};
  const blitz = stats.chess_blitz || {};
  const bullet = stats.chess_bullet || {};

  const chessComRatings = useMemo(
    () => [
      {
        label: "Rapid",
        icon: <FaChessKing className="text-xl" />,
        current: rapid?.last?.rating,
        games:
          (rapid?.record?.win || 0) +
          (rapid?.record?.loss || 0) +
          (rapid?.record?.draw || 0),
        wins: rapid?.record?.win || 0,
      },
      {
        label: "Blitz",
        icon: <FaChessQueen className="text-xl" />,
        current: blitz?.last?.rating,
        games:
          (blitz?.record?.win || 0) +
          (blitz?.record?.loss || 0) +
          (blitz?.record?.draw || 0),
        wins: blitz?.record?.win || 0,
      },
      {
        label: "Bullet",
        icon: <FaChessBishop className="text-xl" />,
        current: bullet?.last?.rating,
        games:
          (bullet?.record?.win || 0) +
          (bullet?.record?.loss || 0) +
          (bullet?.record?.draw || 0),
        wins: bullet?.record?.win || 0,
      },
    ],
    [rapid, blitz, bullet]
  );

  const lichessRatings = useMemo(() => {
    if (!lichess?.perfs) return [];

    return [
      {
        label: "Rapid",
        icon: <FaChessKing className="text-xl" />,
        current:
          lichess.perfs.rapid?.games > 0
            ? lichess.perfs.rapid.rating
            : null,
        games: lichess.perfs.rapid?.games || 0,
      },
      {
        label: "Blitz",
        icon: <FaChessQueen className="text-xl" />,
        current:
          lichess.perfs.blitz?.games > 0
            ? lichess.perfs.blitz.rating
            : null,
        games: lichess.perfs.blitz?.games || 0,
      },
      {
        label: "Bullet",
        icon: <FaChessBishop className="text-xl" />,
        current:
          lichess.perfs.bullet?.games > 0
            ? lichess.perfs.bullet.rating
            : null,
        games: lichess.perfs.bullet?.games || 0,
      },
    ];
  }, [lichess]);

  const totalGames = chessComRatings.reduce((s, r) => s + r.games, 0);
  const totalWins = chessComRatings.reduce((s, r) => s + r.wins, 0);
  const winRate = totalGames
    ? Math.round((totalWins / totalGames) * 100)
    : 0;

  const peakRating = Math.max(
    rapid?.best?.rating || 0,
    blitz?.best?.rating || 0,
    bullet?.best?.rating || 0
  );

  useEffect(() => {
    if (!username) return;

    const fetchAll = async () => {
      setIsLoading(true);
      setLichessLoading(true);

      try {
        const chessCom = await getChessProfile(username);
        setData(chessCom);
      } catch (err) {
        console.error("Chess.com error:", err);
        setData(null);
      } finally {
        setIsLoading(false);
      }

      try {
        const res = await fetch(
          `https://corsproxy.io/?https://lichess.org/api/user/${username}`,
          { headers: { Accept: "application/json" } }
        );

        if (res.ok) {
          const li = await res.json();
          setLichess(li);
        } else {
          setLichess(null);
        }
      } catch (err) {
        console.error("Lichess error:", err);
        setLichess(null);
      } finally {
        setLichessLoading(false);
      }
    };

    fetchAll();
  }, [username]);

  if (!username) {
    return (
      <div className="text-center mt-10 text-secondary">
        Please enter a username
      </div>
    );
  }

  if (isLoading && lichessLoading) return <ChessLoader />;

  const profile = data?.profile;

  return (
    <>
      <Bbutton />

      <div className="max-w-2xl mx-auto bg-surface p-6 rounded-xl font-mono shadow-lg">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-default">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 bg-opp/30 flex items-center justify-center">
              {profile?.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaChess className="text-3xl text-secondary" />
              )}
            </div>

            {peakRating >= 1800 && (
              <div className="absolute -bottom-1 -right-1 bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface shadow-lg">
                <FaCrown className="text-white text-sm" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              {profile?.username || username}
            </h2>
            {profile?.joined && (
              <p className="text-sm text-secondary flex items-center gap-2 mt-1">
                <FaCalendar />
                Member since {new Date(profile.joined * 1000).getFullYear()}
              </p>
            )}
            {peakRating > 0 && (
              <p className="text-sm text-primary flex items-center gap-2 mt-1">
                <FaTrophy className="text-yellow-500" />
                Peak Rating: {peakRating}
              </p>
            )}
          </div>
        </div>

        {totalGames > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <StatBox
              icon={<FaChessBoard />}
              label="Total Games"
              value={totalGames}
            />
            <StatBox
              icon={<FaChartLine />}
              label="Win Rate"
              value={`${winRate}%`}
            />
          </div>
        )}

       <div className="flex flex-col gap-6">
  <PlatformSection
    platform="chess.com"
    ratings={chessComRatings}
    isLoading={isLoading}
  />

  <PlatformSection
    platform="lichess"
    ratings={lichessRatings}
    isLoading={lichessLoading}
  />
</div>

      </div>
    </>
  );
}