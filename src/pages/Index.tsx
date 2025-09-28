import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";

interface IndexProps {
  onShowChat: () => void;
}

const Index = ({ onShowChat }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection onShowChat={onShowChat} />
      <FeaturesSection />
      <TechStackSection />
    </div>
  );
};

export default Index;