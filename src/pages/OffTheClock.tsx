import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { ChevronRight, Music2, ArrowLeft } from "lucide-react";

/* ── Team Carousel ─────────────────────────────────────────── */
const TeamCarousel = ({
  name,
  description,
  images,
}: {
  name: string;
  description: string;
  images: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="w-full max-w-4xl glass-card border rounded-3xl overflow-hidden mb-10 shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-square bg-muted flex items-center justify-center overflow-hidden p-10">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={name}
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 bottom-4 bg-background/90 hover:bg-accent hover:text-accent-foreground p-3 rounded-full shadow-xl transition-all duration-300 group flex flex-col items-center gap-1"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            <div className="flex gap-1">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-accent scale-125" : "bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-3xl font-black tracking-tighter mb-4">{name}</h3>
          <p className="text-muted-foreground leading-relaxed text-base italic">{description}</p>
        </div>
      </div>
    </div>
  );
};

/* ── Artist Card Skeleton ───────────────────────────────────── */
const ArtistSkeleton = () => (
  <div className="w-full max-w-sm glass-card rounded-3xl overflow-hidden">
    <div className="aspect-square shimmer" />
    <div className="p-6 space-y-3">
      <div className="h-6 w-3/4 shimmer rounded-lg" />
      <div className="h-4 w-1/2 shimmer rounded-lg" />
      <div className="h-10 w-full shimmer rounded-full mt-4" />
    </div>
  </div>
);

/* ── Music Visualizer ───────────────────────────────────────── */
const MusicVisualizer = () => (
  <div className="flex items-end gap-0.5 h-4">
    {[0, 100, 200, 50, 150].map((delay, i) => (
      <div
        key={i}
        className="w-0.5 bg-accent rounded-full animate-bounce"
        style={{
          height: `${40 + Math.random() * 60}%`,
          animationDelay: `${delay}ms`,
          animationDuration: `${600 + i * 100}ms`,
        }}
      />
    ))}
  </div>
);

/* ── Artist Interface ───────────────────────────────────────── */
interface Artist {
  name: string;
  track: string;
  trackId: string;
  imageUrl: string;
}

/* ── Main Page ──────────────────────────────────────────────── */
const OffTheClock = () => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/spotify");
        if (!response.ok) throw new Error("Server responded with an error");
        const data = await response.json();
        if (data?.artists) setArtists(data.artists);
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

      {/* Subtle background blob */}
      <div
        className="fixed top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-50"
        style={{ background: "hsl(var(--accent) / 0.07)" }}
      />

      <main className="relative pt-22 pb-28 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Page header */}
        <div className="flex flex-col items-center text-center mb-20 animate-fade-in opacity-0">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Music2 className="w-4 h-4" />
            Beyond the keyboard
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            Off The Clock<span className="text-accent">.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            A peek at me beyond the professional stuff — my top 6 artists pulled live from Spotify,
            plus the teams I bleed for. Click{" "}
            <span className="text-foreground font-medium">"Listen to Favorite"</span> to preview my
            top track by each artist.
          </p>
        </div>

        {/* ── Music Section ───────────────────────────────────── */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="accent-line flex-1" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase px-2">
              Currently into
            </span>
            <div className="accent-line flex-1" />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <ArtistSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {artists && artists.length > 0 ? (
                artists.map((artist) => {
                  const isPlaying = activePlayer === artist.trackId;
                  return (
                    <div
                      key={artist.name}
                      className={`w-full max-w-sm group glass-card rounded-3xl overflow-hidden transition-all duration-500 ${
                        isPlaying
                          ? "border-accent/40 shadow-lg"
                          : "hover:border-accent/20 hover:shadow-xl"
                      }`}
                      style={
                        isPlaying
                          ? { boxShadow: "0 0 40px hsl(var(--accent) / 0.15)" }
                          : {}
                      }
                    >
                      {/* Artist image */}
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={artist.imageUrl}
                          alt={artist.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                        {/* Playing overlay */}
                        {isPlaying && (
                          <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px] flex items-end p-4">
                            <div className="flex items-center gap-2 text-accent text-xs font-medium">
                              <MusicVisualizer />
                              <span>Now playing</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card body */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                        <p className="text-sm text-muted-foreground mb-5 italic leading-snug">
                          {artist.track}
                        </p>

                        {artist.trackId && (
                          <button
                            onClick={() =>
                              setActivePlayer(isPlaying ? null : artist.trackId)
                            }
                            className={`w-full py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${
                              isPlaying
                                ? "bg-accent text-accent-foreground shadow-md"
                                : "bg-secondary hover:bg-accent hover:text-accent-foreground"
                            }`}
                          >
                            {isPlaying ? "Close Player" : "Listen to Favorite"}
                          </button>
                        )}

                        {isPlaying && (
                          <div className="mt-5 animate-in fade-in slide-in-from-top-3 duration-300">
                            <iframe
                              src={`https://open.spotify.com/embed/track/${artist.trackId}?utm_source=generator`}
                              width="100%"
                              height="80"
                              frameBorder="0"
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              loading="lazy"
                              className="rounded-xl"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-16 text-muted-foreground border-2 border-dashed border-border rounded-3xl">
                  <Music2 className="w-10 h-10 mx-auto mb-4 opacity-40" />
                  <p className="text-sm">
                    No music found — local Vercel server might be disconnected.
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ── Sports Section ──────────────────────────────────── */}
        <section className="flex flex-col items-center">
          <div className="flex items-center gap-3 w-full mb-12">
            <div className="accent-line flex-1" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic text-center whitespace-nowrap px-4">
              The Home Teams.
            </h2>
            <div className="accent-line flex-1" />
          </div>

          <TeamCarousel
            name="The Chicago Bulls"
            description="I grew up watching Derrick Rose and Jimmy Butler (my all time favorite player) absolutely dominate while on the Bulls. Go ahead and click through some pictures!"
            images={[
              "/sports_images/bullslogo.jpg",
              "/sports_images/young_shiva_bulls.jpeg",
              "/sports_images/rose_butler.png",
            ]}
          />

          <TeamCarousel
            name="The Chicago Bears"
            description="I've never been to a game, but Alshon Jeffrey is my favorite NFL player. We haven't been good in a while until this 2025 season, but I'm excited for what's ahead."
            images={[
              "/sports_images/bearslogo.png",
              "/sports_images/alshonjeffrey.jpg",
            ]}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OffTheClock;
