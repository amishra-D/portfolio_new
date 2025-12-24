import React, { useEffect, useMemo, useState } from "react"
import {
  FaChessBoard,
  FaTrophy,
  FaChartLine,
  FaCrown,
  FaChess,
  FaCalendar,
  FaChessKing,
  FaChessQueen,
  FaChessBishop,
} from "react-icons/fa"
import { getChessProfile } from "./ChessAPI"
import ChessLoader from "./Components/ChessLoader"
import { BiChevronLeft } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import BackButton from "./Components/backbutton"
function RatingCard({ label, icon, current, best, games }) {
  return (
    <div
      className="
        group
        relative
        p-4 rounded-lg
        border border-white/10
        bg-gradient-to-b from-transparent to-primary/5
        font-mono
        transition-all duration-300
      "
    >      <div className="flex items-center gap-2 mb-3 text-primary">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-secondary">Current</p>
          <p className="text-xl font-bold text-primary">
            {current || "—"}
          </p>
        </div>

        {best && (
          <div className="text-right">
            <p className="text-xs text-secondary">Best</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {best}
            </p>
          </div>
        )}
      </div>

      <div
        className="
          pointer-events-none
          absolute top-3 right-3
          px-2 py-1 rounded
          text-xs font-mono
          bg-neutral-200 text-neutral-900
          dark:bg-neutral-800 dark:text-neutral-100
          opacity-0 translate-y-1
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all duration-200
        "
      >
        {games} games
      </div>
    </div>
  )
}

function ChessProfileCard({ username }) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
const navigate=useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const result = await getChessProfile(username)
        setData(result)
      } catch (err) {
        console.error("Error fetching chess data:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [username])

  const profile = data?.profile
  const stats = data?.stats || {}

  const rapid = stats.chess_rapid || {}
  const blitz = stats.chess_blitz || {}
  const bullet = stats.chess_bullet || {}

  const ratingTypes = useMemo(
    () => [
      {
        key: "rapid",
        label: "Rapid",
        icon: <FaChessKing />,
        current: rapid?.last?.rating,
        best: rapid?.best?.rating,
        games:
          (rapid?.record?.win || 0) +
          (rapid?.record?.loss || 0) +
          (rapid?.record?.draw || 0),
        wins: rapid?.record?.win || 0,
      },
      {
        key: "blitz",
        label: "Blitz",
        icon: <FaChessQueen />,
        current: blitz?.last?.rating,
        best: blitz?.best?.rating,
        games:
          (blitz?.record?.win || 0) +
          (blitz?.record?.loss || 0) +
          (blitz?.record?.draw || 0),
        wins: blitz?.record?.win || 0,
      },
      {
        key: "bullet",
        label: "Bullet",
        icon: <FaChessBishop />,
        current: bullet?.last?.rating,
        best: bullet?.best?.rating,
        games:
          (bullet?.record?.win || 0) +
          (bullet?.record?.loss || 0) +
          (bullet?.record?.draw || 0),
        wins: bullet?.record?.win || 0,
      },
    ],
    [rapid, blitz, bullet]
  )

  const totalGames = useMemo(
    () => ratingTypes.reduce((sum, r) => sum + r.games, 0),
    [ratingTypes]
  )

  const totalWins = useMemo(
    () => ratingTypes.reduce((sum, r) => sum + r.wins, 0),
    [ratingTypes]
  )

  const winRate = useMemo(
    () => (totalGames ? Math.round((totalWins / totalGames) * 100) : 0),
    [totalGames, totalWins]
  )

  const peakRating = useMemo(
    () =>
      Math.max(
        rapid?.best?.rating || 0,
        blitz?.best?.rating || 0,
        bullet?.best?.rating || 0
      ),
    [rapid, blitz, bullet]
  )


  if (isLoading) {
    return (
      <ChessLoader/>
    )
  }

  if (!data) {
    return (
      <div className="p-6 rounded-xl bg-surface border border-white/10 text-secondary text-center">
        Failed to load chess stats
      </div>
    )
  }


  return (
    <>
    <BackButton></BackButton>

    <div className="rounded-xl bg-surface p-6 max-w-md mx-auto font-mono">
      <div className="flex items-center gap-4 mb-2 mt-10">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-primary/20 bg-primary/5 flex items-center justify-center">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.username}
                className="w-full h-full object-cover"
              />
            ) : (
              <FaChess className="text-2xl text-primary/60" />
            )}
          </div>

          {peakRating >= 1800 && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary border-2 border-surface flex items-center justify-center">
              <FaCrown className="text-xs text-white" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-primary truncate">
            {profile.username}
          </h3>
          <div className="flex items-center gap-2 text-secondary text-sm">
            <FaCalendar className="text-xs" />
            <span>
              Joined {new Date(profile.joined * 1000).getFullYear()}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {ratingTypes.map((r) => (
          <RatingCard key={r.key} {...r} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <StatBox icon={<FaChessBoard />} label="Total Games" value={totalGames} />
        <StatBox icon={<FaChartLine />} label="Win Rate" value={`${winRate}%`} />
      </div>

      <div className="sm:hidden mt-4 pt-4 border-t border-white/10 flex justify-center gap-2 text-sm">
        <FaTrophy className="text-primary/60" />
        <span className="text-secondary">Peak:</span>
        <span className="font-bold text-primary">{peakRating}</span>
      </div>
<div className="mt-6 flex justify-center">
  <a href='https://www.chess.com/member/beefygotit' className="font-bold bg-gradient-to-b from-[#7FA650] to-[#5C8A3B] text-sm px-4 py-2 text-white rounded-md ">
    Play Together
  </a>
</div>    </div>
</>
  )
}


function StatBox({ icon, label, value }) {
  return (
    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
      <div className="flex items-center justify-center gap-2 mb-2 text-primary/70">
        {icon}
        <span className="text-sm font-medium text-primary">{label}</span>
      </div>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  )
}

export default ChessProfileCard
