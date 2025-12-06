import { HeroSection } from "@/components/HeroSection";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { ShowsSection } from "@/components/ShowsSection";
import { BioSection } from "@/components/BioSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ShowsSection />
      <PhotoCarousel />
      <BioSection />
      <Footer />
    </main>
  );
};

export default Index;
