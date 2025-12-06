export const BioSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-center mb-16 text-gradient-gold">
          The Man Behind the Mic
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-semibold">Chris Raufheisen</span> has been making audiences cry with laughter for over a decade. Known for his razor-sharp wit and fearless take on everyday absurdities, Chris transforms the mundane into the magnificently hilarious.
            </p>
            <p>
              From sold-out theaters to late-night TV appearances, Chris has proven that comedy isn't just about jokes—it's about connecting with people through the universal language of laughter.
            </p>
            <p>
              When he's not on stage, you can find him writing new material at 3 AM, fueled by coffee and an unhealthy obsession with observing human behavior.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-gold/20 to-amber/10 p-1">
              <div className="w-full h-full rounded-lg bg-secondary flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <p className="font-display text-6xl text-gold mb-4">"</p>
                  <p className="text-xl text-foreground italic mb-4">
                    Comedy is just tragedy plus time. I just have really bad timing.
                  </p>
                  <p className="text-gold font-display text-2xl">— Chris Raufheisen</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Shows Performed" },
            { number: "1M+", label: "Social Followers" },
            { number: "50+", label: "Cities Toured" },
            { number: "∞", label: "Laughs Generated" },
          ].map((stat, index) => (
            <div key={index} className="animate-fade-up opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="font-display text-4xl md:text-5xl text-gold mb-2">{stat.number}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
