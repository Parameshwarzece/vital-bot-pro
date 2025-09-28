import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";

interface IndexProps {
  onShowChat: () => void;
  onShowAppointment: () => void;
}

const Index = ({ onShowChat, onShowAppointment }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection onShowChat={onShowChat} onShowAppointment={onShowAppointment} />
      <FeaturesSection />
      <TechStackSection />
    </div>
  );
};

export default Index;