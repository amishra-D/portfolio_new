export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Username required" });
  }

  try {
const lichessRes = await fetch(
  `https://lichess.org/api/user/${username}`,
  {
    headers: {
      Accept: "application/json",
      "User-Agent": "vercel-portfolio"
    }
  }
);
    if (!lichessRes.ok) {
      return res
        .status(lichessRes.status)
        .json({ error: "Lichess API error" });
    }

    const data = await lichessRes.json();
    res.setHeader("Cache-Control", "s-maxage=300");

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Lichess data" });
  }
}
