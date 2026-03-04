import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TipsSection from "@/components/TipsSection";
import StoriesSection from "@/components/StoriesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TipsSection />
      <StoriesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
