import React, { useEffect, useState, useRef } from "react"
import { FaSpotify, FaPlay, FaPause } from "react-icons/fa"

export default function SpotifyCard() {
  const [lastTrack, setLastTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState("")
  const audioRef = useRef(null)

  useEffect(() => {
    async function fetchLastPlayed() {
      const token = localStorage.getItem("spotify_token")
      const expiresAt = localStorage.getItem("spotify_expires_at")

      if (!token || Date.now() > Number(expiresAt)) {
        console.warn("Spotify token missing or expired")
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
          const err = await res.json()
          console.error("Spotify API error:", res.status, err)
          return
        }

        const data = await res.json()
        if (!data.items?.length) return

        const track = data.items[0].track

        setLastTrack({
          name: track.name,
          artists: track.artists.map(a => a.name).join(", "),
          albumImage: track.album?.images?.[0]?.url ?? null,
          url: track.external_urls?.spotify,
          previewUrl: track.preview_url,
        })
      } catch (err) {
        console.error("Spotify fetch failed:", err)
      }
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

    if (!lastTrack) return

    if (!lastTrack.previewUrl) {
      window.open(lastTrack.url, "_blank")
      return
    }

    const audio = audioRef.current
    if (!audio) return

    if (!isPlaying) {
      audio.src = lastTrack.previewUrl
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setError("Autoplay blocked"))
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  if (!lastTrack) return null

  return (
    <div className="w-full max-w-md bg-neutral-900/70 border border-white/10 rounded-lg p-3 flex items-center gap-3">
      <img
        src={lastTrack.albumImage}
        alt={lastTrack.name}
        className="w-14 h-14 rounded-md object-cover"
      />

      <div className="flex-1">
        <a
          href={lastTrack.url}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold hover:underline"
        >
          {lastTrack.name}
        </a>
        <p className="text-xs text-gray-400">{lastTrack.artists}</p>

        <button
          onClick={togglePreview}
          className="mt-2 flex items-center gap-2 text-xs text-green-400"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
          Preview
        </button>

        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      </div>

      <FaSpotify className="text-green-500" />
    </div>
  )
}
