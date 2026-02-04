// src/pages/OffTheClock.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

// Keep your Artist interface and TOP_ARTISTS array here
interface Artist {
  name: string;
  track: string;
  trackId: string;
  imageUrl: string;
}

const TOP_ARTISTS: Artist[] = [
  {
    name: "Artist Name",
    track: "Your Favorite Song",
    trackId: "6rqhFgbbKSHbAKKy6u4HTu", 
    imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60",
  },
];

const OffTheClock = () => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-20 px-6 max-w-6xl mx-auto min-h-screen">
        <div className="mb-12">
           <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            ← Back to Resume
          </Link>
          <h1 className="text-5xl font-black tracking-tighter mt-8 mb-4">OffTheClock.</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A real-time look at the rotation that keeps me focused during long dev sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOP_ARTISTS.map((artist) => (
            <div key={artist.name} className="group relative bg-card border rounded-2xl overflow-hidden transition-all hover:shadow-xl">
              <div className="aspect-square overflow-hidden">
                <img src={artist.imageUrl} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{artist.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 italic">{artist.track}</p>
                <button
                  onClick={() => setActivePlayer(activePlayer === artist.trackId ? null : artist.trackId)}
                  className="w-full py-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-semibold transition-colors"
                >
                  {activePlayer === artist.trackId ? "Close Player" : "Listen to Favorite"}
                </button>
                {activePlayer === artist.trackId && (
                  <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                    <iframe
                      src={`https://open.spotify.com/embed/track/${artist.trackId}`}
                      width="100%" height="80" frameBorder="0" allow="encrypted-media" className="rounded-lg"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OffTheClock;