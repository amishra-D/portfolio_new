export const getChessProfile = async (username="beefygotit") => {
  try {
    const [profileRes, statsRes] = await Promise.all([
      fetch(`https://api.chess.com/pub/player/${username}`),
      fetch(`https://api.chess.com/pub/player/${username}/stats`),
    ])

    if (!profileRes.ok || !statsRes.ok) {
      throw new Error("Failed to fetch chess data")
    }

    const profile = await profileRes.json()
    const stats = await statsRes.json()

    return { profile, stats }
  } catch (err) {
    console.error(err)
    return null
  }
}
