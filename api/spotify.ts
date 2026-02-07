import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  try {
    const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

    // 1. Get Access Token (FIXED: Real Spotify URL)
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN || '',
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return res.status(tokenResponse.status).json({ error: 'Spotify Token Error', details: tokenData });
    }

    // 2. Fetch Top Artists (FIXED: Real Spotify URL)
    // Added limit=6 so you don't fetch too many
    const artistsRes = await fetch('https://api.spotify.com/v1/me/top/artists?limit=6', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const artistsData = await artistsRes.json();

    if (!artistsData || !artistsData.items) {
      return res.status(200).json({ artists: [], message: 'Spotify returned no items. Check app permissions.' });
    }

    // 3. Fetch Top Tracks for each Artist
    const artistData = await Promise.all(
      artistsData.items.map(async (artist: any) => {
        try {
          // FIX: Real Spotify URL + Corrected `${artist.id}` syntax
          const topTracksRes = await fetch(
            `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`,
            {
              headers: { Authorization: `Bearer ${tokenData.access_token}` },
            }
          );
          const trackData = await topTracksRes.json();
          
          return {
            name: artist.name,
            imageUrl: artist.images[0]?.url || '',
            track: trackData.tracks?.[0]?.name || 'Favorite Track',
            trackId: trackData.tracks?.[0]?.id || '',
          };
        } catch (e) {
          return { name: artist.name, imageUrl: artist.images[0]?.url || '', track: '', trackId: '' };
        }
      })
    );

    return res.status(200).json({ artists: artistData });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}