// api/spotify.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  try {
    const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    
    // 1. Get Access Token using official Spotify URL
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 
        Authorization: `Basic ${basic}`, 
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
      body: new URLSearchParams({ 
        grant_type: 'refresh_token', 
        refresh_token: SPOTIFY_REFRESH_TOKEN || '' 
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) return res.status(tokenResponse.status).json(tokenData);

    // 2. Fetch Top Artists using official Spotify URL
    const artistsRes = await fetch('https://api.spotify.com/v1/me/top/artists?limit=6&time_range=medium_term', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const artistsData = await artistsRes.json();

    // CRITICAL: Defensive check to prevent the .map() crash
    if (!artistsData || !artistsData.items || !Array.isArray(artistsData.items)) {
      return res.status(200).json({ artists: [], message: "No artists found or scope error" });
    }

    // 3. Fetch Top Tracks for each Artist
    const artistData = await Promise.all(
      artistsData.items.map(async (artist: any) => {
        try {
          const topTracksRes = await fetch(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`, {
            headers: { Authorization: `Bearer ${tokenData.access_token}` },
          });
          const trackData = await topTracksRes.json();
          return {
            name: artist.name,
            imageUrl: artist.images[0]?.url || '',
            track: trackData.tracks?.[0]?.name || "Favorite Track",
            trackId: trackData.tracks?.[0]?.id || "",
          };
        } catch (e) {
          return { name: artist.name, imageUrl: artist.images[0]?.url || '', track: "", trackId: "" };
        }
      })
    );

    return res.status(200).json({ artists: artistData });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}