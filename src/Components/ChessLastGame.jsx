import React, { useEffect, useState } from "react"
import { FaChess } from "react-icons/fa"

export default function ChessLastGame({ username = "beefygotit" }) {
  const [game, setGame] = useState(null)

  useEffect(() => {
    let mounted = true

    async function fetchLastGame() {
      try {
        const archivesRes = await fetch(
          `https://api.chess.com/pub/player/${username}/games/archives`
        )
        if (!archivesRes.ok) return
        const archives = await archivesRes.json()
        const months = archives.archives
        if (!months?.length) return

        const latestUrl = months[months.length - 1]
        const gamesRes = await fetch(latestUrl)
        if (!gamesRes.ok) return
        const gamesJson = await gamesRes.json()
        const games = gamesJson.games
        if (!games?.length) return

        const last = games[games.length - 1]

        const isWhite = last.white.username.toLowerCase() === username.toLowerCase()
        const player = isWhite ? last.white : last.black
        const opponent = isWhite ? last.black : last.white
        const resultRaw = player.result
        
        let outcome = "Draw"
        if (resultRaw === "win") outcome = "Win"
        else if (["checkmated", "resigned", "timeout", "lose"].includes(resultRaw)) outcome = "Loss"
        else if (["stalemate", "agreed", "repetition"].includes(resultRaw)) outcome = "Draw"

        const pgn = last.pgn || ""
        const movesText = pgn.split("\n\n").slice(1).join(" ").replace(/\s+/g, " ").trim()
        const snippet = movesText ? movesText.split(" ").slice(0, 14).join(" ") + " ..." : ""

        const payload = {
          opponent: opponent.username,
          opponentRating: opponent.rating,
          timeControl: last.time_control,
          timeClass: last.time_class,
          snippet,
          url: last.url,
          endedAt: last.end_time,
          outcome,
        }

        if (mounted) setGame(payload)
      } catch (e) {
        console.error("Failed to fetch chess game:", e)
      }
    }

    fetchLastGame()
    return () => { mounted = false }
  }, [username])

  if (!game) return (
    <div className="w-full px-6 sm:px-10 lg:px-16 mt-4">
      <div className="w-full max-w-md bg-surface/60 border border-white/10 rounded-lg p-3 animate-pulse">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center">
              <FaChess className="text-xl text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-16 bg-gray-300 dark:bg-neutral-800 rounded"></div>
              <div className="h-2 w-24 bg-gray-200 dark:bg-neutral-800/50 rounded"></div>
            </div>
          </div>
          <div className="h-4 w-10 bg-gray-200 dark:bg-neutral-800 rounded"></div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="h-4 w-3/4 bg-gray-300 dark:bg-neutral-800 rounded"></div>
          <div className="h-3 w-full bg-gray-200 dark:bg-neutral-800/50 rounded"></div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="h-6 w-16 bg-gray-200 dark:bg-neutral-800 rounded"></div>
          <div className="h-3 w-20 bg-gray-200 dark:bg-neutral-800/50 rounded"></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 mt-4">
      <div className="w-full max-w-md bg-surface/60 border border-white/10 rounded-lg p-3 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-150">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center">
              <FaChess className="text-xl text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Last game</p>
              <p className="text-xs text-secondary capitalize">{game.timeClass} • {game.timeControl}</p>
            </div>
          </div>

          <div className={`text-xs font-bold uppercase tracking-wider ${
            game.outcome === 'Win' ? 'text-green-500' : 
            game.outcome === 'Loss' ? 'text-red-400' : 'text-gray-400'
          }`}>
            {game.outcome}
          </div>
        </div>

        <div className="mt-3 text-sm">
          <p className="font-medium text-primary">
            vs {game.opponent} <span className="text-xs text-secondary font-normal">({game.opponentRating})</span>
          </p>
          {game.snippet && (
            <p className="text-xs text-secondary mt-2 leading-relaxed italic opacity-80">
              {game.snippet}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <a 
            href={game.url} 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs px-3 py-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            Replay Game
          </a>
          <span className="text-[10px] uppercase tracking-tighter text-secondary ml-auto opacity-60">
            {new Date(game.endedAt * 1000).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  )
}