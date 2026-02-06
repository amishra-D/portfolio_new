const CLIENT_ID = "bab16290c345497aa0fcaad39d25efff"

export const REDIRECT_URI =
  (typeof window !== "undefined"
    ? window.location.origin
    : "http://127.0.0.1:5173") + "/callback"

const SCOPES = [
  "user-read-recently-played",
  "user-top-read",
]

function generateRandomString(length = 64) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  return Array.from(crypto.getRandomValues(new Uint8Array(length)))
    .map(x => chars[x % chars.length])
    .join("")
}

async function sha256(plain) {
  const encoder = new TextEncoder()
  return crypto.subtle.digest("SHA-256", encoder.encode(plain))
}

function base64urlencode(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "")
}

async function generateCodeChallenge(verifier) {
  return base64urlencode(await sha256(verifier))
}

export async function loginWithSpotify() {
  const verifier = generateRandomString()
  const challenge = await generateCodeChallenge(verifier)

  localStorage.setItem("spotify_code_verifier", verifier)

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES.join(" "),
    code_challenge_method: "S256",
    code_challenge: challenge,
  })

  window.location.href =
    "https://accounts.spotify.com/authorize?" + params.toString()
}

export async function exchangeCodeForToken(code) {
  const verifier = localStorage.getItem("spotify_code_verifier")
  if (!verifier) throw new Error("PKCE verifier missing")

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: verifier,
    }),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(`Spotify token error: ${res.status} ${JSON.stringify(data)}`)
  }

  localStorage.setItem("spotify_token", data.access_token)
  localStorage.setItem(
    "spotify_expires_at",
    Date.now() + data.expires_in * 1000
  )

  localStorage.removeItem("spotify_code_verifier")
  return data
}
