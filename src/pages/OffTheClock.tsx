import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

interface Artist {
  name: string;
  track: string;
  trackId: string;
  imageUrl: string;
}

const OffTheClock = () => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        setLoading(true);
        // Using relative path for Vercel Dev compatibility
        const response = await fetch('/api/spotify');
        
        if (!response.ok) throw new Error("Server responded with an error");

        const data = await response.json();
        
        if (data && data.artists) {
          setArtists(data.artists);
        }
      } catch (e) {
        console.error("Error fetching Spotify data:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchMusic();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-col items-center text-center mb-20">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-black tracking-tighter mb-6">OffTheClock.</h1>
          <p className="text-muted-foreground text-lg max-w-4xl leading-relaxed">
            Welcome to the OffTheClock page! This is just a less professional about me page. Below are my top 6 artists right now, 
            pulled live from my Spotify account. Click to hear their most popular track.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground">Fetching the vibes...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {artists && artists.length > 0 ? (
              artists.map((artist) => (
                <div key={artist.name} className="w-full max-w-sm group relative bg-card border rounded-3xl overflow-hidden transition-all hover:shadow-2xl">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={artist.imageUrl} 
                      alt={artist.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground mb-8 italic">{artist.track}</p>
                    {artist.trackId && (
                      <button
                        onClick={() => setActivePlayer(activePlayer === artist.trackId ? null : artist.trackId)}
                        className="w-full py-4 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-bold transition-all"
                      >
                        {activePlayer === artist.trackId ? "Close Player" : "Listen to Favorite"}
                      </button>
                    )}
                    {activePlayer === artist.trackId && (
                      <div className="mt-6 animate-in fade-in slide-in-from-top-4">
                        <iframe
                          src={`https://open.spotify.com/embed/track/${artist.trackId}?utm_source=generator`}
                          width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="rounded-xl"
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground border-2 border-dashed rounded-3xl p-10">
                No music found. Your local Vercel server might be disconnected.
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OffTheClock;