// api/spotify.ts (at the project root)
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return res.status(500).json({ error: "Missing environment variables" });
  }

  try {
    const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    
    // 1. Get Access Token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: SPOTIFY_REFRESH_TOKEN }),
    });
    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;

    // 2. Fetch Top 6 Artists
    const artistsRes = await fetch('https://api.spotify.com/v1/me/top/artists?limit=6&time_range=medium_term', {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const { items: artists } = await artistsRes.json();

    // 3. Get the #1 track for each artist (with safety fallbacks)
    const artistData = await Promise.all(
      artists.map(async (artist: any) => {
        try {
          const topTracksRes = await fetch(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`, {
            headers: { Authorization: `Bearer ${access_token}` },
          });
          const { tracks } = await topTracksRes.json();
          
          return {
            name: artist.name,
            imageUrl: artist.images[0]?.url || '',
            track: tracks[0]?.name || "Artist's Top Song",
            trackId: tracks[0]?.id || "",
          };
        } catch (e) {
          return {
            name: artist.name,
            imageUrl: artist.images[0]?.url || '',
            track: "Popular Song",
            trackId: "",
          };
        }
      })
    );

    return res.status(200).json({ artists: artistData });
  } catch (error: any) {
    console.error("Vercel Function Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
}