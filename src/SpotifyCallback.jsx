import { useEffect } from "react"
import { exchangeCodeForToken } from "./Components/spotifyAuth1"

export default function SpotifyCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get("code")

    if (!code) return

    exchangeCodeForToken(code)
      .then(() => {
        window.location = "/"
      })
      .catch((err) => {
        console.error("Spotify token exchange failed:", err)
        window.location = "/?spotify_error=1"
      })
  }, [])

  return <p>Logging you in with Spotify…</p>
}
