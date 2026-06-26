import React, { useEffect, useState, useRef } from "react"
import { FaSpotify, FaPlay, FaPause, FaExternalLinkAlt } from "react-icons/fa"

export default function SpotifyCard() {
  const [track, setTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState("")
  const [isFallback, setIsFallback] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    async function fetchLastPlayed() {
      const token = localStorage.getItem("spotify_token")
      const expiresAt = localStorage.getItem("spotify_expires_at")

      if (!token || Date.now() > Number(expiresAt)) {
        useFallback()
        return
      }

      try {
        const res = await fetch(
          "https://api.spotify.com/v1/me/player/recently-played?limit=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (!res.ok) {
          useFallback()
          return
        }

        const data = await res.json()
        if (!data.items?.length) {
          useFallback()
          return
        }

        const t = data.items[0].track
        setTrack({
          name: t.name,
          artists: t.artists.map(a => a.name).join(", "),
          albumImage: t.album?.images?.[0]?.url ?? null,
          url: t.external_urls?.spotify,
          previewUrl: t.preview_url,
          status: "Recently Played"
        })
        setIsFallback(false)
      } catch (err) {
        console.error("Spotify fetch failed:", err)
        useFallback()
      }
    }

    function useFallback() {
      // Sleek curated fallback recommendation
      setTrack({
        name: "Prosper",
        artists: "Russ",
        albumImage: "https://static.qobuz.com/images/covers/81/75/0886446767581_600.jpg",
        url: "https://open.spotify.com/track/6M77K1Zz6Y6D1S37728z2y",
        previewUrl: null, // Fallback to direct spotify link
        status: "On Repeat"
      })
      setIsFallback(true)
    }

    fetchLastPlayed()

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    audioRef.current = new Audio()

    const audio = audioRef.current
    const onEnded = () => setIsPlaying(false)
    const onError = () => {
      setError("Preview playback failed")
      setIsPlaying(false)
    }

    audio.addEventListener("ended", onEnded)
    audio.addEventListener("error", onError)

    return () => {
      audio.removeEventListener("ended", onEnded)
      audio.removeEventListener("error", onError)
    }
  }, [])

  function togglePreview(e) {
    e.preventDefault()
    setError("")

    if (!track) return

    if (!track.previewUrl) {
      window.open(track.url, "_blank")
      return
    }

    const audio = audioRef.current
    if (!audio) return

    if (!isPlaying) {
      audio.src = track.previewUrl
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setError("Autoplay blocked"))
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  if (!track) return null

  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 mt-6">
      <div className="
        w-full max-w-md 
        bg-card border border-default rounded-xl p-3.5 
        shadow-sm hover:shadow-md 
        transition-all duration-300
        relative overflow-hidden
        group
      ">
        {/* Subtle Spotify Green Corner Blur */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#1DB954]/10 rounded-full blur-2xl group-hover:bg-[#1DB954]/15 transition-colors duration-300 pointer-events-none"></div>

        <div className="flex items-center gap-4">
          {/* Album Cover */}
          <div className="relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border border-default/50">
            <img
              src={track.albumImage}
              alt={track.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                {/* Micro sound wave animation */}
                <div className="flex items-end gap-[2px] h-4">
                  <div className="w-[2px] bg-[#1DB954] animate-[wave_1s_ease-in-out_infinite_alternate]"></div>
                  <div className="w-[2px] bg-[#1DB954] animate-[wave_0.8s_ease-in-out_infinite_alternate_0.2s] h-3"></div>
                  <div className="w-[2px] bg-[#1DB954] animate-[wave_1.2s_ease-in-out_infinite_alternate_0.1s] h-2"></div>
                </div>
              </div>
            )}
          </div>

          {/* Track Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1.5">
              <FaSpotify className="text-[#1DB954] text-sm animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                {track.status}
              </span>
            </div>
            
            <a
              href={track.url}
              target="_blank"
              rel="noreferrer"
              className="
                text-sm font-bold text-primary 
                hover:text-[#1DB954] dark:hover:text-[#1DB954]
                transition-colors truncate block
              "
            >
              {track.name}
            </a>
            <p className="text-xs text-secondary truncate font-sans font-medium mt-0.5">
              {track.artists}
            </p>

            <div className="flex items-center gap-3 mt-2.5">
              {track.previewUrl ? (
                <button
                  onClick={togglePreview}
                  className="
                    flex items-center gap-1.5 
                    text-xs font-semibold text-[#1DB954] 
                    hover:underline cursor-pointer
                  "
                >
                  {isPlaying ? <FaPause className="text-[10px]" /> : <FaPlay className="text-[10px]" />}
                  <span>Preview Song</span>
                </button>
              ) : (
                <a
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-1.5 
                    text-xs font-semibold text-[#1DB954] 
                    hover:underline cursor-pointer
                  "
                >
                  <span>Listen on Spotify</span>
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              )}
            </div>

            {error && <p className="text-[10px] text-red-500 mt-1">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
