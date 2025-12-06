import heroImage from "@/assets/chris-hero.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToShows = () => {
    document.getElementById("shows")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chris Raufheisen - Standup Comedian"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Standup Comedian
        </p>
        <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-none mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <span className="text-gradient-gold">Chris</span>
          <br />
          <span className="text-foreground">Raufheisen</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-up opacity-0 max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
          Raw. Unfiltered. Hilarious.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          <Button variant="gold" size="xl" onClick={scrollToShows}>
            Get Tickets
          </Button>
          <Button variant="gold-outline" size="xl" asChild>
            <a href="#about">About Chris</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold" />
      </div>
    </section>
  );
};
