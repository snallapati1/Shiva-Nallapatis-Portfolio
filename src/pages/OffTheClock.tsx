import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { ChevronRight } from "lucide-react";


const TeamCarousel = ({ name, description, images }: { name: string, description: string, images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="w-full max-w-4xl bg-card border rounded-3xl overflow-hidden mb-16 shadow-sm">
      <div className="flex flex-col md:flex-row">
        {/* Image Display - Centering Fix Applied Here */}
        <div className="relative w-full md:w-1/2 aspect-square bg-muted flex items-center justify-center overflow-hidden p-12">
          <img 
            src={images[currentIndex]} 
            alt={name} 
            className="max-w-full max-h-full object-contain transition-all duration-500" 
          />
          
          <button 
            onClick={nextImage} 
            className="absolute right-4 bottom-4 bg-background/90 hover:bg-primary hover:text-primary-foreground p-3 rounded-full shadow-xl transition-all group flex flex-col items-center"
          >
            <ChevronRight className="w-6 h-6 group-active:translate-x-1 transition-transform" />
            <div className="mt-1 flex gap-1">
               {images.map((_, i) => (
                 <div key={i} className={`w-1 h-1 rounded-full ${i === currentIndex ? "bg-current" : "bg-current/30"}`} />
               ))}
            </div>
          </button>
        </div>

        {/* Text Description */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-left">
          <h3 className="text-3xl font-black mb-6 tracking-tighter">{name}</h3>
          <p className="text-muted-foreground leading-relaxed text-lg italic">{description}</p>
        </div>
      </div>
    </div>
  );
};


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
            pulled live from my Spotify account (Hopefully you like my music taste). You can click "Listen to Favorite" to get a preview
          of smy favorite song by each artist. You can also scroll down to see my favorite sports teams!</p>
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
        <hr className="my-20 border-muted" />

        <section className="flex flex-col items-center">
          <h2 className="text-5xl font-black tracking-tighter mb-16 italic text-center">The Home Teams.</h2>
          
          <TeamCarousel 
            name="The Chicago Bulls" 
            description="I grew up watching Derrick Rose and Jimmy Butler(my all time favorite player) absolutely dominate while on the Bulls. Go ahead and click through some pictures!"
            images={[
              "/sports_images/bullslogo.jpg",
              "/sports_images/young_shiva_bulls.jpeg",
              "/sports_images/rose_butler.png"
            ]}
          />

          <TeamCarousel 
            name="The Chicago Bears" 
            description="I've never been to a game, but Alshon Jeffrey is my favorite NFL player, we haven't been good in a while until this 2025 season, but I'm excited for what's ahead. Go ahead and click through some pictures!"
            images={[
              "/sports_images/bearslogo.png",
              "/sports_images/alshonjeffrey.jpg"
            ]}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OffTheClock;