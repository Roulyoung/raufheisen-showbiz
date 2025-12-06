import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const shows = [
  {
    id: 1,
    date: "Dec 14, 2024",
    time: "8:00 PM",
    venue: "The Comedy Store",
    city: "Los Angeles, CA",
    ticketUrl: "#",
    soldOut: false,
  },
  {
    id: 2,
    date: "Dec 21, 2024",
    time: "9:00 PM",
    venue: "Laugh Factory",
    city: "Chicago, IL",
    ticketUrl: "#",
    soldOut: false,
  },
  {
    id: 3,
    date: "Jan 5, 2025",
    time: "7:30 PM",
    venue: "Caroline's on Broadway",
    city: "New York, NY",
    ticketUrl: "#",
    soldOut: true,
  },
  {
    id: 4,
    date: "Jan 18, 2025",
    time: "8:00 PM",
    venue: "Punchline Comedy Club",
    city: "San Francisco, CA",
    ticketUrl: "#",
    soldOut: false,
  },
  {
    id: 5,
    date: "Feb 1, 2025",
    time: "9:00 PM",
    venue: "Helium Comedy Club",
    city: "Philadelphia, PA",
    ticketUrl: "#",
    soldOut: false,
  },
];

export const ShowsSection = () => {
  return (
    <section id="shows" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-center mb-4 text-gradient-gold">
          Upcoming Shows
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Catch Chris live on his nationwide tour
        </p>

        <div className="space-y-4">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className="group bg-card border border-border rounded-lg p-6 hover:border-gold/50 transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-gold mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">
                      {show.date} • {show.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {show.venue}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{show.city}</span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {show.soldOut ? (
                    <span className="inline-flex items-center px-6 py-3 rounded-md bg-muted text-muted-foreground font-semibold">
                      Sold Out
                    </span>
                  ) : (
                    <Button variant="gold" asChild>
                      <a href={show.ticketUrl} className="gap-2">
                        Get Tickets
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold-outline" size="lg">
            View All Shows
          </Button>
        </div>
      </div>
    </section>
  );
};
